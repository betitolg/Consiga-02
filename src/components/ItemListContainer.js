import { Jumbotron } from "react-bootstrap";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { CardDeck, Spinner } from "react-bootstrap";

export default function ItemListContainer(props) {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let url = "https://productsrestservice.azurewebsites.net/api/product/";

  useEffect(() => {
   
    if (typeof id !== "undefined") {
      console.log(props);
      url = url + "category/" + id;
    }

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner animation="grow" variant="dark" />;
  } else {
    return (
      <div>
        <Jumbotron>
          <h1>Bienvenido, {props.greetings}</h1>
          <p>Puedes consultar nuestros productos:</p>
        </Jumbotron>
        <CardDeck>
          <ItemList ItemList={items} />
        </CardDeck>
      </div>
    );
  }
}
