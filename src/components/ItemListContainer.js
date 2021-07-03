import { Jumbotron } from 'react-bootstrap';

export default function Text(props) {




  return (
    <Jumbotron>
      <h1>Bienvenido, {props.greetings}</h1>
      <p>
        Puedes consultar nuestros productos:
      </p>
    </Jumbotron>
   
  );
}

