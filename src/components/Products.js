
import React, { Component } from 'react'
import Item from './Item'
import { CardDeck } from 'react-bootstrap';
export default class Products extends Component {


    constructor(props) {
        super(props);

        this.productos = [
            {
                id: 1,
                title: "Cebolla",
                description: "Cebolla x Kg",
                img: "https://supermercadosronald.vteximg.com.br/arquivos/ids/156300-1000-1000/cebolla-paiteña-kg-002022.jpg?v=637476186286230000"
            },
            {
                id: 2,
                title: "Papa",
                description: "Papa x Kg",
                img: "https://supermercadosronald.vteximg.com.br/arquivos/ids/158185-1000-1000/Papa-Chaucha-Kg-2027.jpg?v=637607495734400000"
            },
            {
                id: 3,
                title: "Ajo",
                description: "Ajo x Kg",
                img: "https://supermercadosronald.vteximg.com.br/arquivos/ids/158179-1000-1000/Ajo-Kg-2002.jpg?v=637607484758770000"
            },
            {
                id: 4,
                title: "Coliflor",
                description: "Coliflor x Unidad",
                img: "https://supermercadosronald.vteximg.com.br/arquivos/ids/158184-1000-1000/Coliflor-Kg-2031.jpg?v=637607494555830000"
            }

        ]
    }



    render() {

        const mapFunctionComponent = () => {
            let ConjuntoDeComponentesFuncionales = []

            for (let index of this.productos) {
                let NuevocomponenteFuncional = <Item
                    titulo={index.title}
                    descripcion={index.description}
                    img={index.img}
                />

                ConjuntoDeComponentesFuncionales = [...ConjuntoDeComponentesFuncionales, NuevocomponenteFuncional]

            }

            return ConjuntoDeComponentesFuncionales
        }

        return (
            <CardDeck>
                {mapFunctionComponent()}
            </CardDeck>
        );
    }
}