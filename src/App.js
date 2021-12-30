import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Footer/Footer';

import Home from './home/pages/Home';
import Projects from './portfolio/pages/Projects';
// TODO IMPORT POSTS
import Posts from './post/pages/Posts';
import PostDetail from './post/pages/PostDetail';
import Photos from './photography/pages/Photos';
import Drawings from './drawing/pages/Drawings';

const App = () => {
  const routes = (
    <Switch>
      {/* HOMEPAGE */}
      <Route path='/' exact>
        <Home />
      </Route>

      {/* PORFOLIO */}
      <Route path='/portfolio' exact>
        <Projects />
      </Route>
      <Route path='/portfolio/app' exact></Route>
      <Route path='/portfolio/app/:projectTitle' exact></Route>
      <Route path='/portfolio/arch' exact></Route>
      <Route path='/portfolio/arch/:projectTitle' exact></Route>

      {/* POSTS */}
      <Route path='/posts' exact>
        <Posts />
      </Route>
      <Route path='/posts/:postTitle' exact>
        <PostDetail />
      </Route>

      {/* PHOTOGRAPHY */}
      <Route path='/photography' exact>
        <Photos />
      </Route>

      {/* DRAWINGS */}
      <Route path='/drawings' exact>
        <Drawings />
      </Route>

      {/* REDIRECT */}
      <Redirect to='/' />
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
      <Footer />
    </Router>
  );
};

export default App;
