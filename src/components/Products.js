import React, { useState, useEffect } from "react";
import Item from "./Item";
import { CardDeck } from "react-bootstrap";

export default function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://productsrestservice.azurewebsites.net/api/product")
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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando...</div>;
  } else {
    return (
      <CardDeck>
        {items.map((item) => (
          <Item
            titulo={item.name}
            descripcion={item.description}
            img={item.img}
            stock={item.stock}
          />
        ))}
      </CardDeck>
    );
  }
}
