import React, { useState } from 'react';

export default function MegaSena(props) {
    const [numeros, setNumeros] = useState(Array(props.qtdNumeros).fill(0))

    function gerarNumerosNaoContido(array) {
        const novoNumero = parseInt(Math.random() * (60 - 1)) + 1
        return array.includes(novoNumero) 
            ? gerarNumerosNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNumeros)
            .fill(0)
            .reduce((a) => {
                return [...a, gerarNumerosNaoContido(a)]
            }, [])
            .sort((a, b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
}