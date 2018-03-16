import React, { Component } from 'react'

export default class BoxerHeader extends Component {
    render() {
        const styleHeader = {
            padding: '6px 16px',
            borderBottom: '1px solid rgba(0,0,0,.1)',
            ...this.props.style
        }
        const className = 'boxer-header ' + this.props.className
        return (
            <header className={className} style={styleHeader}>
                {this.props.heading ? (
                    <h3 className="mb-0">{this.props.heading}</h3>
                ) : null}
                {this.props.subHeading ? (
                    <h5 className="mb-0" style={{ opacity: 0.5 }}>
                        {this.props.subHeading}
                    </h5>
                ) : null}
            </header>
        )
    }
}
