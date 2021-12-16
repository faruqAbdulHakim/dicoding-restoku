class ContentLoading extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>
        Loading
      </h2>
      <p>make sure you have internet connection</p>
    `;
  }
}

customElements.define('content-loading', ContentLoading);
