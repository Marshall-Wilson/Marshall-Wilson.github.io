import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "./pages/MainPage"
import ColorAnimation from "./pages/ColorAnimation"
import About from "./pages/About"
import FarmNameGenerator from "./pages/FarmNameGenerator";
import ExplorerContainer from "./pages/ExplorerContainer"

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={MainPage} /> 
        <Route exact path="/colors" component={ColorAnimation} />
        <Route exact path="/about" component={About} />
        <Route exact path="/generator" component={FarmNameGenerator} />
        <Route exact path="/explorer" component={ExplorerContainer} />
      </Switch>
    </Router>
  );
}

export default App;
