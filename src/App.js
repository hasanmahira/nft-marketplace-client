import Header from "./components/pages/Header";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Footer from "./components/pages/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
