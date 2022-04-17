import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import FooterHome from './components/FooterHome/FooterHome';
import HeaderHome from './components/HeaderHome/HeaderHome';
import Home from './pages/Home/Home';
import { history } from './utils/setting';
function App() {
  return (
    <Router history={history}>
      <HeaderHome />
      <Switch>
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/'} component={Home} />
      </Switch>
      <FooterHome />
    </Router>
  );
}

export default App;
