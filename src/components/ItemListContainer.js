import { Jumbotron } from "react-bootstrap";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const { id } = useParams();



  return (
    <div>
      <Jumbotron>
        <h1>Bienvenido, {props.greetings}</h1>
        <p>Puedes consultar nuestros productos:</p>
      </Jumbotron>
      <ItemList category={typeof id === 'undefined'?0:id}/>
    </div>
  );
}
