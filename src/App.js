import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Footer/Footer';
import Home from './home/pages/Home';

const App = () => {
  const routes = (
    <Switch>
      {/* HOMEPAGE */}
      <Route path='/' exact>
        <Home />
      </Route>

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
      <main>{routes}</main>
      {/* TODO ADD FOOTER */}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
