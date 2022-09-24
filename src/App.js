import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinalScreen from "../pages/FinalScreen";
import Questions from "../pages/Questions";
import Settings from "../pages/Setting";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Settings />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/score">
          <FinalScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
