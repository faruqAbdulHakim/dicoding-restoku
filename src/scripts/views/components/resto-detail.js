import API_ENDPOINT from '../../global/api-endpoint';
import RestaurantData from '../../data/restaurant-data';

class RestoDetail extends HTMLElement {
  set setRestaurant(restaurant) {
    this.restoData = restaurant;
    this.render();
  }

  render() {
    const {
      id,
      pictureId,
      name,
      categories,
      address,
      city,
      rating,
      description,
      menus,
      customerReviews,
    } = this.restoData;

    this.innerHTML = `
    <div class="flex-container">
      <img class="lazyload" data-src="${API_ENDPOINT.MEDIUM_PICTURE(pictureId)}" alt="${name}" tabindex="0"/>
      <div class="resto-detail">
        <h3 tabindex="0">${name}</h3>
        <div tabindex="0">
          <p><b>Categories</b></p> 
          <p>${categories.map((category) => category.name).join(', ')}</p>
        </div>
        <div tabindex="0">
          <p><b>Location</b></p> 
          <p>${address}, ${city}</p>
        </div>
        <div tabindex="0">
          <p><b>Rating</b></p> 
          <p class="rating">⭐${rating}</p>
        </div>
        <div tabindex="0">
          <p><b>Description</b></p> 
          <p>${description}</p>
        </div>
      </div>
    </div>
    <div class="flex-container">
      <div class="resto-menus">
        <h3 tabindex="0">Menus</h3>
        <div class="resto-menus-categories">
          <div>
            <p tabindex="0">Foods</p>
            <ul>
            ${menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}
            </ul>
          </div>
          <div>
            <p tabindex="0">Drinks</p>
            <ul>
            ${menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      <div class="resto-reviews">
        <h3 tabindex="0">Reviews</h3>
        ${customerReviews.map((review) => `
          <div class="resto-reviews-review">
            <p class="reviewers-name" tabindex="0">${review.name}</p>
            <p class="reviews-date" tabindex="0">${review.date}</p>
            <p class="reviews-review" tabindex="0">${review.review}</p>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="add-review">
      <h3 tabindex="0">Add new Review</h3>
      <form>
        <label>
          <span class="label-text">Nama</span>
          <input type="text" name="nama"></input>
        </label>
        <label>
          <span class="label-text">Review</span>
          <textarea name="review" rows="5"></textarea>
        </label>
        <button type="submit">
          Add new review
        </button>
      </form>
    </div>
    `;
    const form = this.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const reviewerName = this.querySelector('input[name="nama"]').value;
      const review = this.querySelector('textarea').value;
      const formData = { id, name: reviewerName, review };
      RestaurantData.addNewReview(formData).then(() => {
        window.location.reload(true);
      });
    });
  }
}

customElements.define('resto-detail', RestoDetail);
