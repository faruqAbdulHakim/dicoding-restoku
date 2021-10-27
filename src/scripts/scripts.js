const data = require('../DATA.json');

const menuButton = document.querySelector('nav button');
const menuList = document.querySelector('nav ul');
menuButton.addEventListener('click', () => {
  menuList.classList.toggle('show');

  if (menuButton.innerText === 'X') {
    menuButton.innerText = '≡';
    menuButton.ariaLabel = 'membuka menu';
  } else {
    menuButton.innerText = 'X';
    menuButton.ariaLabel = 'menutup menu';
  }
});

const truncateString = (str) => {
  return str.slice(0, 200) + '...';
};
const restoList = document.querySelector('.resto-list');
data.restaurants.map((resto) => {
  const restoItem = document.createElement('div');
  restoItem.classList.add('resto-item');
  restoItem.innerHTML = `
  <img src="${resto.pictureId}" alt="${resto.name}" tabindex="0"/>
  <div class="resto-info">
    <h3 tabindex="0">${resto.name} </h3>
    <p>
      <span tabindex="0">
      ${resto.city} 
      </span>
      <span class="rating" tabindex="0" aria-label="rating ${resto.rating}">
      ⭐${resto.rating}
      </span> 
    </p>
    <p class="resto-desc" tabindex="0">${truncateString(resto.description)}</p>
  </div>
  `;

  restoList.append(restoItem);
});
