import React from 'react'


export default function Sub(props) {
    function acao() {
        props.onClicar(Math.random(), 'Gerado')
    }
    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}