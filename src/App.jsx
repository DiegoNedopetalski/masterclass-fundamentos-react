import React from 'react'
import ComFilhos from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import './App.css'

export default function App(props) {
    return (
        <div className='App'>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>
            <Card titulo="#02 - Componente com parâmetros">
                <ComParametro titulo="Esse é o título"
                    subtitulo="Esse é o subtítulo" />
                <ComParametro titulo="Esse é o segundo título"
                    subtitulo="Esse é segundo o subtítulo" />
            </Card>
            <Card titulo="#03 - Componente com filhos" >
                <ComFilhos
                >
                    <ul>
                        <li>José</li>
                        <li>Amélia</li>
                        <li>Carlos</li>
                        <li>Maria</li>
                    </ul>
                </ComFilhos>
            </Card>
        </div>
    )
}