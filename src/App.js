import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MainPage from "./pages/index"
import ColorAnimation from "./pages/ColorAnimation"

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/colors" component={ColorAnimation} />
    </Router>
  );
}

export default App;
