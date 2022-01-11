import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header.jsx"
import MainPage from "./pages/MainPage"
import ColorAnimation from "./pages/ColorAnimation"
import About from "./pages/About"
import FarmNameGenerator from "./pages/FarmNameGenerator";
import SpotifyExplorer from "./pages/SpotifyExplorer"
import DragDraft from "./pages/DragDraft"

function App() {
  return (
    <div className="app">
      <Header />
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/colors" component={ColorAnimation} />
          <Route exact path="/about" component={About} />
          <Route exact path="/generator" component={FarmNameGenerator} />
          <Route exact path="/explorer" component={SpotifyExplorer} />
          <Route exact path="/dragdraft" component={DragDraft} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
