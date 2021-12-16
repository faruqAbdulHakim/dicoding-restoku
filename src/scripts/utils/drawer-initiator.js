const DrawerInitiator = {
  init({ button, drawer }) {
    const buttonEl = button;

    buttonEl.addEventListener('click', (event) => {
      event.stopPropagation();
      const isShow = drawer.classList.contains('show');

      if (isShow) {
        drawer.classList.remove('show');
        buttonEl.innerText = '≡';
        buttonEl.ariaLabel = 'membuka menu';
      } else {
        drawer.classList.add('show');
        buttonEl.innerText = 'X';
        buttonEl.ariaLabel = 'menutup menu';
      }
    });
  },
};

export default DrawerInitiator;
