import RestaurantData from '../../data/restaurant-data';
import { createRestoItem } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    <main id="main">
      <h2 tabindex="0">Daftar Restoran</h2>
      <content-loading></content-loading>
      <div id="resto-list" class="resto-list">
      </div>
    </main>
    <footer tabindex="0">Copyright © 2021 - RESTOKU.</footer>
    `;
  },

  async afterRender() {
    const restoList = document.querySelector('#resto-list');
    const { restaurants: listOfRestaurant } = await RestaurantData.getListOfRestaurant();
    const loading = document.querySelector('content-loading');
    loading.remove();
    listOfRestaurant.forEach((restaurant) => {
      restoList.appendChild(createRestoItem(restaurant));
    });
  },
};

export default Home;
