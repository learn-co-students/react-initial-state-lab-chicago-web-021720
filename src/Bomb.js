// your Bomb code here!
import React from 'react'
class Bomb extends React.Component {
  constructor(props){
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    const s = this.state.secondsLeft;
    const m = s > 0 ? `${s} seconds left before I go boom!`: 'Boom!';

    return (
      <div>{m}</div>
    )
  }
}
export default Bomb;
