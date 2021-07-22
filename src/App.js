import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
      <Switch>
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetailContainer} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
