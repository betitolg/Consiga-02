import { Card,Button } from 'react-bootstrap';
import React from 'react'
import ItemCount from './ItemCount';
    export default function Item(props) {
       
        return (
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.titulo}</Card.Title>
              <Card.Text>
               {props.descripcion}
              </Card.Text>
              <Card.Text>
               <ItemCount stock={props.stock} initial='1'/>
              </Card.Text>
              <div style={{ color: "red" }}> Precio: $ {props.price}</div>
              <Button variant="primary">Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        )
    }


 