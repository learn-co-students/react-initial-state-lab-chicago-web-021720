import React, { Component } from 'react';
// your ImageSlider code here!
class ImageSlider extends Component {

    //constructor sets initial state
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return ( 
        <div className='imageSlider'>
            I am on slide {this.state.currentSlideIndex}
        </div>
        );
    }
}

export default ImageSlider;