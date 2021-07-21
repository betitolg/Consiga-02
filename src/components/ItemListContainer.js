import { Jumbotron } from "react-bootstrap";
import ItemList from "./ItemList";
export default function Text(props) {
  return (
    <div>
      <Jumbotron>
        <h1>Bienvenido, {props.greetings}</h1>
        <p>Puedes consultar nuestros productos:</p>
      </Jumbotron>
      <ItemList />
    </div>
  );
}
