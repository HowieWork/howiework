import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Footer/Footer';
import { ThemeContext } from './shared/context/theme-context';

import Home from './home/pages/Home';
import Projects from './portfolio/pages/Projects';
import ProjectDetail from './portfolio/pages/ProjectDetail';
import Posts from './post/pages/Posts';
import PostDetail from './post/pages/PostDetail';
import Photos from './photography/pages/Photos';
import Drawings from './drawing/pages/Drawings';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    document.body.classList.toggle('dark-theme');
    setIsDarkTheme((prevState) => !prevState);
  };

  // SYNC WITH SYSTEM COLOR THEME
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)');

  isSystemDark.addEventListener('change', function (event) {
    // NOTE .MATCHES RETURNS TRUE/FALSE
    event.matches ? setIsDarkTheme(true) : setIsDarkTheme(false);
  });

  // TOGGLE DARK THEME FOR BODY ELEMENT
  isDarkTheme
    ? document.body.classList.add('dark-theme')
    : document.body.classList.remove('dark-theme');

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
      <Route path='/portfolio/app/:projectSlug' exact>
        <ProjectDetail />
      </Route>

      {/* POSTS */}
      <Route path='/posts' exact>
        <Posts />
      </Route>
      <Route path='/posts/:postSlug' exact>
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
    <ThemeContext.Provider
      value={{
        isDarkTheme: isDarkTheme,
        toggleDarkThemeHandler: toggleDarkTheme,
      }}
    >
      <Router basename='/howiework'>
        <MainNavigation />
        <main>{routes}</main>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;