import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from "./pages/index"

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage} />
    </Router>
  );
}

export default App;
