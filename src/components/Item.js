import { Card,Button } from 'react-bootstrap';
import React from 'react'

    export default function Item(props) {
        console.log(props);
        return (
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.titulo}</Card.Title>
              <Card.Text>
               {props.descripcion}
              </Card.Text>
              <Button variant="primary">Consultar Producto</Button>
            </Card.Body>
          </Card>
        )
    }


 