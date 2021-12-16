const URLParser = {
  parseURLWithCombiner() {
    const url = window.location.hash.slice(1);
    const splitedURL = this.URLSplitter(url);
    return this.URLCombiner(splitedURL);
  },

  parseURLWithoutCombiner() {
    const url = window.location.hash.slice(1);
    return this.URLSplitter(url);
  },

  URLSplitter(url) {
    const splitedURL = url.split('/');
    return {
      resource: splitedURL[1] || null,
      id: splitedURL[2] || null,
      verb: splitedURL[3] || null,
    };
  },

  URLCombiner(splitedURL) {
    return (
      (splitedURL.resource ? `/${splitedURL.resource}` : '/')
      + (splitedURL.id ? '/:id' : '')
      + (splitedURL.verb ? `/${splitedURL.verb}` : '')
    );
  },
};

export default URLParser;
