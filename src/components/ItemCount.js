import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount(props) {
  const [count, moreCount] = useState(props.initial);

  const AddProduct = () => {
    if (count < props.stock) {
      moreCount(count + 1);
    }
  };
  const RemoveProduct = () => {
    if (count !== 1) {
      moreCount(count - 1);
    }
  };

  return (
    <div>
      <h6 style={{ color: "red" }}>Stock disponible: {props.stock}</h6>
      <Button variant="dark" onClick={RemoveProduct}>
        -
      </Button>
      <input type="text" value={count} style={{ width: "50px" }} />
      <Button variant="dark" onClick={AddProduct}>
        +
      </Button>
    </div>
  );
}
