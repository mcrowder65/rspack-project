import { BrowserRouter, Switch, Route } from "react-router-dom";
import One from "./one";
import Two from "./two";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/one" component={One} />
      <Route exact path="/two" component={Two} />
    </Switch>
  );
};

export default Routes;
