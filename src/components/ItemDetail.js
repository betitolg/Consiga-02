import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function ItemDetail(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://productsrestservice.azurewebsites.net/api/product/3")
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
      <Card className="text-center">
        <Card.Header>Consulta Producto : {items.name}</Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={items.img} />
          <Card.Title>{items.name}</Card.Title>
          <Card.Text>{items.description} </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ItemCount stock={items.stock} initial="1" />
          <br />
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Footer>
      </Card>
    );
  }
}
