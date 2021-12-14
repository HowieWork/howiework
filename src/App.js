import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/MainNavigation';
import Footer from './shared/components/Footer';

const App = () => {
  const routes = (
    <Switch>
      {/* HOMEPAGE */}
      <Route path='/' exact></Route>

      {/* PORFOLIO */}
      <Route path='/portfolio' exact></Route>
      <Route path='/portfolio/app' exact></Route>
      <Route path='/portfolio/app/:projectTitle' exact></Route>
      <Route path='/portfolio/arch' exact></Route>
      <Route path='/portfolio/arch/:projectTitle' exact></Route>

      {/* POSTS */}
      <Route path='/posts' exact></Route>
      <Route path='/posts/:postTitle' exact></Route>

      {/* PHOTOGRAPHY */}
      <Route path='/photography' exact></Route>

      {/* DRAWINGS */}
      <Route path='/drawings' exact></Route>

      {/* RESUME.PDF */}
      <Route path='/resume.pdf' exact></Route>

      {/* REDIRECT */}
      <Redirect to='/' />
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      {routes}
      <Footer />
    </Router>
  );
};

export default App;
