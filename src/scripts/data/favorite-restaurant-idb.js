import { openDB } from 'idb';
import CONFIGURATION from '../global/configuration';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIGURATION;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIDB = {
  async getAllFavoriteRestaurant() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  // eslint-disable-next-line consistent-return
  async getFavoriteRestaurantById(id) {
    if (id) return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  // eslint-disable-next-line consistent-return
  async putFavoriteRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (restaurant.hasOwnProperty('id')) {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    }
  },

  async deleteFavoriteRestaurantById(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

};

export default FavoriteRestaurantIDB;
