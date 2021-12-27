import API_ENDPOINT from '../../global/api-endpoint';

class RestoItem extends HTMLElement {
  set setRestaurant(restaurant) {
    this.restoData = restaurant;
    this.render();
  }

  render() {
    const {
      id,
      pictureId,
      name,
      city,
      rating,
      description,
    } = this.restoData;

    this.innerHTML = `
    <a href="/#/detail/${id}">
      <img class="lazyload" data-src="${API_ENDPOINT.SMALL_PICTURE(pictureId)}" alt="${name}" tabindex="0"/>
      <div class="resto-info">
        <h3 tabindex="0">${name} </h3>
        <p>
          <span tabindex="0">
          ${city} 
          </span>
          <span class="rating" tabindex="0" aria-label="rating ${rating}">
          ⭐${rating}
          </span> 
        </p>
        <p class="resto-desc" tabindex="0">${description.slice(0, 200)}...</p>
      </div>
    </a>
    `;
  }
}

customElements.define('resto-item', RestoItem);
