import CONFIGURATION from '../global/configuration';

const CacheHelper = {
  async cachingAppShell(appShell) {
    const cache = await this.openCache();
    cache.addAll(appShell);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((cacheName) => cacheName !== CONFIGURATION.CACHE_NAME)
      .map((filteredCacheName) => caches.delete(filteredCacheName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this.fetchCache(request);
      return response;
    }

    return this.fetchCache(request);
  },

  async addCache(request) {
    const cache = await this.openCache();
    cache.add(request);
  },

  async openCache() {
    return caches.open(CONFIGURATION.CACHE_NAME);
  },

  async fetchCache(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }

    await this.addCache(request);
    return response;
  },
};

export default CacheHelper;
