/* eslint-disable no-undef */
import FavoriteRestaurantIDB from '../src/scripts/data/favorite-restaurant-idb';
import actAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContract';

describe('Favorite restaurant IDB specs', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIDB.getAllFavoriteRestaurant())
      .forEach(async ({ id }) => {
        await FavoriteRestaurantIDB.deleteFavoriteRestaurantById(id);
      });
  });

  actAsFavoriteRestaurantModel(FavoriteRestaurantIDB);
});
