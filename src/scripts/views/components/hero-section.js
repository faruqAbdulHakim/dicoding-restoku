class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 tabindex="0">RESTOKU.</h2>
      <p tabindex="0">Cari tempat makan terbaik untukmu</p>
    `;
  }
}

customElements.define('hero-section', HeroSection);
