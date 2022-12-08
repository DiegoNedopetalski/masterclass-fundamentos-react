import React from 'react'
import ComFilhos from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import './App.css'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

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
            <Card titulo="#04 - Repetição" >
                <Repeticao />
            </Card>
            <Card titulo="#05 - Condicional" >
                <Condicional numero={11}/>
            </Card>
            <Card titulo="#06 - Condicional com IF" >
                <Condicional numero={10}/>
            </Card>
        </div>
    )
}