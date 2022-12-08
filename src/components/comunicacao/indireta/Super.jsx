import React from 'react'
import Sub from './Sub'

export default function Super(props) {

    function quandoClicar(valorGerado) {
        console.log('Ação!!!')
        console.log(valorGerado)
    }

    return(
        <div>
            <h4>Valor</h4>
            <Sub onClicar={quandoClicar}>José</Sub>
        </div>
    )
}