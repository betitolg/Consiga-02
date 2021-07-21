import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch("https://productsrestservice.azurewebsites.net/api/product/" + id)
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
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner animation="grow" variant="dark" />;
  } else {
    return (
      <Card className="text-center">
        <Card.Header>Consulta Producto : {items.name}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={items.img} />
          <Card.Title>{items.name}</Card.Title>
          <Card.Text>{items.description} </Card.Text>

          <div style={{ color: "red" }}> Precio: $ {items.price}</div>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ItemCount stock={items.stock} initial={1} />
          <br />
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Footer>
      </Card>
    );
  }
}
