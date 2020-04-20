// import { render } from "enzyme"
import React from "react"

class Bomb extends React.Component {

    constructor(params) {
        super()
        this.state = {
            secondsLeft: params.initialCount
        }
    }

    render() {
        let rez;
        if (this.state.secondsLeft > 0) {
            rez = <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
        }
        else {
            rez = <div>Boom!</div>
        }
        return rez
    }

}

export default Bomb