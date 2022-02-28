import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import TV from "./Routes/TV";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={() => <Home />} />
        <Route path={"/tv"} component={() => <TV />} />
        <Route path={"/search"} component={() => <Search />} />
      </Switch>
    </Router>
  );
}

export default App;
