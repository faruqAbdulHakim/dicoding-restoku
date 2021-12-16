import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorites';
import Home from '../views/pages/home';

const Routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default Routes;
