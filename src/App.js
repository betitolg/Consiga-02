import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>
    <div className="container">
      <NavBar />
      <br />
      <ItemListContainer greetings="Daniel" />
      <ItemDetailContainer />
    </div>
    </Router>
  );
}

export default App;
