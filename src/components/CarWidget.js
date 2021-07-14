import { Button } from "react-bootstrap";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CarWidget = () => {
  return (
    <Button variant="outline-success">
      <FaShoppingCart />
      Carrito de Compras
    </Button>
  );
};

export default CarWidget;
