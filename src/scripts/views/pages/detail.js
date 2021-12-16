import RestaurantData from '../../data/restaurant-data';
import URLParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import { createRestoDetail } from '../template/template-creator';

const Detail = {
  async render() {
    return `
    <main id="main">
      <content-loading></content-loading>
      <button id="favorite-button" class="favorite-button"></button>
    </main>
    <footer tabindex="0">Copyright © 2021 - RESTOKU.</footer>
    `;
  },

  async afterRender() {
    const url = URLParser.parseURLWithoutCombiner();
    const { restaurant } = (await RestaurantData.getDetailOfRestaurant(url.id));

    const loading = document.querySelector('content-loading');
    loading.remove();

    const mainContainer = document.querySelector('main');
    mainContainer.appendChild(createRestoDetail(restaurant));

    const favoriteButton = document.querySelector('#favorite-button');
    FavoriteButtonInitiator.init({ favoriteButton, restaurant });
  },
};

export default Detail;
