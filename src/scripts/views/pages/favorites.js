import FavoriteRestaurantIDB from '../../utils/favorite-restaurant-idb';
import { createRestoItem } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <hero-section></hero-section>
    <main id="main" tabindex="0">
      <h2 tabindex="0">Favorite</h2>
      <content-loading></content-loading>
      <div id="resto-list" class="resto-list"></div>
    </main>
    <footer tabindex="0">Copyright © 2021 - RESTOKU.</footer>
    `;
  },

  async afterRender() {
    const restoList = document.querySelector('#resto-list');
    const listOfRestaurant = await FavoriteRestaurantIDB.getAllFavoriteRestaurant();
    const loading = document.querySelector('content-loading');
    loading.remove();
    if (listOfRestaurant.length > 0) {
      listOfRestaurant.forEach((restaurant) => {
        restoList.appendChild(createRestoItem(restaurant));
      });
    } else {
      const noFavoriteRestaurantEl = `
        <p>add some Favorite Restaurant first</p>
      `;
      restoList.innerHTML = noFavoriteRestaurantEl;
    }
  },
};

export default Favorite;
