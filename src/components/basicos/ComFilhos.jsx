import React from 'react'

export default function ComFilhos(props) {
    return (
        <div>
            <h2>Os Filhos:
                <div>
                    {props.children}
                </div>
            </h2>
        </div>
    )
}