import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact></Route>
    </Switch>
  );
  return <Router></Router>;
};

export default App;
