import Routes from '../routes/routes';
import URLParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, root }) {
    this.button = button;
    this.drawer = drawer;
    this.root = root;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
    });
  }

  async renderPage() {
    const routePath = URLParser.parseURLWithCombiner();
    const page = Routes[routePath];
    this.root.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
