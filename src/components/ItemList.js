import React from "react";
import Item from "./Item";
import { CardDeck } from "react-bootstrap";

export default function ItemList(props) {
  return (
    <CardDeck>
     {props.ItemList.map((item) => (
        <Item
          titulo={item.name}
          descripcion={item.description}
          img={item.img}
          stock={item.stock}
          price={item.price}
          id={item.id}
        />
      ))}
    </CardDeck>
  );
}
