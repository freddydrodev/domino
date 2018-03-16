import React, { Component } from 'react'



export default class BoxerContent extends Component {
    render() {
        const style = { padding: 16 , ...this.props.style}
        const className = 'boxer-content ' + this.props.className
        return (
            <div className={className} style={style}>
                {this.props.children}
            </div>
        )
    }
}
