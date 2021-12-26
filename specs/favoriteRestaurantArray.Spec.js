/* eslint-disable no-undef */
import actAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const favoriteRestoArray = {
  getAllFavoriteRestaurant: () => favoriteRestaurants,
  // eslint-disable-next-line consistent-return
  getFavoriteRestaurantById: (id) => {
    if (id) {
      return favoriteRestaurants.find(({ id: restoId }) => restoId === id);
    }
  },
  putFavoriteRestaurant: (restaurant) => {
    // eslint-disable-next-line no-prototype-builtins
    if (restaurant.hasOwnProperty('id')) {
      favoriteRestaurants.push(restaurant);
    }
  },
  deleteFavoriteRestaurantById: (id) => {
    favoriteRestaurants = favoriteRestaurants.filter(({ id: restoId }) => restoId !== id);
  },
};

describe('Favorite resto array contract test', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  actAsFavoriteRestaurantModel(favoriteRestoArray);
});
