import "./App.css";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScientificCal from "./components/ScientificCal";

function App() {
  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Calculator} />
          <Route path="/scientificCalculator" component={ScientificCal} />
        </Switch>
      </Router>
  
  );
}

export default App;
