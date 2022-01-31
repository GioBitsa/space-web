import Home from "./pages/Home";
import './app.css';
import Moon from "./pages/Moon";
import Mars from "./pages/Mars";
import Europa from "./pages/Europa";
import Titan from "./pages/Titan";
import Commander from "./pages/Commander";
import Specialist from "./pages/Specialist";
import Pilot from "./pages/Pilot";
import Engineer from "./pages/Engineer";
import Vehicle from "./pages/Vehicle";
import Capsule from "./pages/Capsule";
import SpaceSport from "./pages/SpaceSport";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destination">
          <Moon />
        </Route>
        <Route exact path="/destination/moon">
          <Moon />
        </Route>
        <Route exact path="/destination/mars">
          <Mars />
        </Route>
        <Route exact path="/destination/europa">
          <Europa />
        </Route>
        <Route exact path="/destination/titan">
          <Titan />
        </Route>
        <Route exact path="/crew">
          <Commander />
        </Route>
        <Route exact path="/crew/commander">
          <Commander />
        </Route>
        <Route exact path="/crew/commander">
          <Commander />
        </Route>
        <Route exact path="/crew/specialist">
          <Specialist />
        </Route>
        <Route exact path="/crew/pilot">
          <Pilot />
        </Route>
        <Route exact path="/crew/engineer">
          <Engineer />
        </Route>
        <Route exact path="/technology">
          <Vehicle />
        </Route>
        <Route exact path="/technology/Vehicle">
          <Vehicle />
        </Route>
        <Route exact path="/technology/spacesport">
          <SpaceSport />
        </Route>
        <Route exact path="/technology/capsule">
          <Capsule />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
