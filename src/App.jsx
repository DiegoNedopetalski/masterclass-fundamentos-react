import React from 'react'

import Card from './components/layout/Card'
import ComFilhos from './components/basicos/ComFilhos'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import './App.css'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'

export default function App(props) {
    return (
        <div className='App'>
            <Card titulo="#01 - Primeiro Componente" color="#009688">
                <Primeiro />
            </Card>
            <Card titulo="#02 - Componente com parâmetros" color="#63ace5">
                <ComParametro titulo="Esse é o título"
                    subtitulo="Esse é o subtítulo" />
                <ComParametro titulo="Esse é o segundo título"
                    subtitulo="Esse é segundo o subtítulo" />
            </Card>
            <Card titulo="#03 - Componente com filhos" color="#35a79c">
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
            <Card titulo="#04 - Repetição" color="#4b86b4">
                <Repeticao />
            </Card>
            <Card titulo="#05 - Condicional" color="#54b2a9">
                <Condicional numero={11}/>
            </Card>
            <Card titulo="#06 - Condicional com IF" color="#2a4d69" >
                <CondicionalComIf numero={10}/>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#ff77aa" >
                <Pai sobrenome="Freitas"/>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#29a8ab" >
                <Super/>
            </Card>
        </div>
    )
}