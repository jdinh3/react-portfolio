import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/Aboutme";
import Work from "./pages/Work";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
