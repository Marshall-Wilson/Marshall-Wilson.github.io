import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx"
import ColorAnimation from "./pages/ColorAnimation.jsx"
import About from "./pages/About.jsx"
import FarmNameGenerator from "./pages/FarmNameGenerator.jsx";
import ExplorerContainer from "./pages/ExplorerContainer.jsx"

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
