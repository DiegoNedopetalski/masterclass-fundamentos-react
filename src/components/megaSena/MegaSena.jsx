import React from 'react';

export default class MegaSena extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { random: 0 }
    }

    handleClick() {
        let min = 1
        let max = 60
        var rand = min + Math.random() * (max - min)
        this.setState({ random: this.state.random + rand })
    }

    render() {
        return (
            <div>

                <button>Oi</button>
            </div>
        )
    }
}
