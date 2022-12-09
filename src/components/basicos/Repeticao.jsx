import React from 'react'

import products from '../../data/products'

export default function Repeticao(props) {

    function getProductLI() {
        return products.map(prod => {
            return <li key={prod.price} >
                {prod.id} {prod.name} - R$ {prod.price}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductLI()}
            </ul>
        </div>
    )
}