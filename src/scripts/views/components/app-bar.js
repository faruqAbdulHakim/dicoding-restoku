class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <h1><a href="/#" class="touch">RESTOKU.</a></h1>
      <button type="button" class="touch" aria-label="membuka menu">≡</button>
      <ul>
        <li><a href="/#" class="touch">HOME</a></li>
        <li><a href="/#/favorite" class="touch">FAVORITE</a></li>
        <li>
          <a
            href="https://github.com/faruqAbdulHakim"
            target="_blank"
            rel="noopener noreferrer"
            class="touch"
            >ABOUT US</a
          >
        </li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
