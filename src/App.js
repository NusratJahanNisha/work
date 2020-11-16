import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import NotFound from './Components/NotFound/NotFound';
import OurClassPage from './Components/OurClassPage/OurClassPage';
import AdvanceGymPage from './Components/AdvanceGymPage/AdvanceGymPage';
import PricingPlans from './Components/PricingPlans/PricingPlans';
import GymMembership from './Components/GymMembership/GymMembership';


function App() {
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route path="/homePage">
            <HomePage></HomePage>
          </Route>
          <Route path="/ourClassPage">
            <OurClassPage></OurClassPage>
          </Route>
          <Route path="/advanceGymPage">
            <AdvanceGymPage></AdvanceGymPage>
          </Route>
          <Route path="/pricingPlans">
            <PricingPlans></PricingPlans>
          </Route>
          <Route path="/gymMemberShip">
            <GymMembership></GymMembership>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
