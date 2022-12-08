import React from 'react'
import Filho from './Filho'

export default function Pai(props) {
    return(
        <div>
            <Filho sobrenome={props.sobrenome || "Silva"}>José</Filho>
            <Filho {...props}>Antonio</Filho>
            <Filho sobrenome="Silva">Joaquim</Filho>
        </div>
    )
}