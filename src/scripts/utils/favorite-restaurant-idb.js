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

  async getFavoriteRestaurantById(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async putFavoriteRestaurant(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteFavoriteRestaurantById(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

};

export default FavoriteRestaurantIDB;
