import React, { Component } from 'react'

class Slider extends Component {
    render() {
        return (
            <div id="bpm-slider">
                  <div>{this.props.bpm} BPM</div>
                  <input type="range" min="60" max="240" value={this.props.bpm} onChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default Slider