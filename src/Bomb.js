import React, { Component } from 'react';
// your Bomb code here!
class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft === 0) {
            return(<div>Boom!</div>);
        } else {
            return (
            <div>
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            </div>
            );
        }
    }
}

export default Bomb;