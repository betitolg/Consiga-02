import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function ItemCount(props) {
  const [count, moreCount] = useState(props.initial);

  const AddProduct = () => {
    var integer = parseInt(count, 10);

    if (integer < props.stock) {
      moreCount(integer + 1);
    }
  };
  const RemoveProduct = () => {
    var integer = parseInt(count, 10);
    if (integer !== 1) {
      moreCount(integer - 1);
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
