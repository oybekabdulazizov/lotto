import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 5, 
        maxNum: 30
    }

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) }
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(currState => ({
            nums: currState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div className="Lottery">
                <h1 className="Lottery-title">{this.props.title}</h1>
                <div>{this.state.nums.map(n => <Ball num={n} />)}</div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery;