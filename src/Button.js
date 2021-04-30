import React, { Component } from 'react'

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>
              {this.props.currentState ? "Stop" : "Start"}
            </button>
        );
    }
}

export default Button