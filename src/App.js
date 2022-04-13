import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import { history } from "./utils/setting";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
