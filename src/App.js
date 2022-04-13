import { Route, Switch, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { LoginTemplate } from "./templates/LoginTemplate";
import { history } from "./utils/setting";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <LoginTemplate exact path={"/login"} component={Login} />
        <LoginTemplate exact path={"/register"} component={Register} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
