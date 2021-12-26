import { createFavoriteButton, createFillFavoriteButton } from '../views/template/template-creator';
import FavoriteRestaurantIDB from '../data/favorite-restaurant-idb';

const FavoriteButtonInitiator = {
  async init({ favoriteButton, restaurant }) {
    this.favoriteButton = favoriteButton;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;
    const isFavorite = !(await FavoriteRestaurantIDB.getFavoriteRestaurantById(id));

    if (isFavorite) {
      this.renderFavoriteButton();
    } else {
      this.renderFillFavoriteButton();
    }
  },

  renderFavoriteButton() {
    this.favoriteButton.innerHTML = createFavoriteButton();
    this.favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.putFavoriteRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderFillFavoriteButton() {
    const { id } = this.restaurant;

    this.favoriteButton.innerHTML = createFillFavoriteButton();
    this.favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.deleteFavoriteRestaurantById(id);
      this.renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
