import React, { Component } from 'react'

import BoxerHeader from './BoxerHeader'
import BoxerContent from './BoxerContent'

export default class BoxerBox extends Component {
    render() {
        const style = {
            maxWidth: '100%',
            maxHeight: '100%',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.075)',
            borderRadius: 5,
            backgroundColor: 'white',
            marginBottom: '24px',
            ...this.props.style
        }

        const header =
            this.props.heading || this.props.subHeading || this.props.options
                ? true
                : false

        const heading = this.props.heading ? this.props.heading : null
        const subHeading = this.props.subHeading ? this.props.subHeading : null
        const options = this.props.options ? this.props.options : null
        const noBorder = this.props.content ? {} : { borderBottom: 0 }
        const padding = this.props.padding ? this.props.padding : null
        const className = 'boxer-box ' + this.props.className

        // style
        const HeaderStyle = { noBorder, padding }
        const ContentStyle = { padding }

        return (
            <div className={className} style={style}>
                {header ? (
                    <BoxerHeader
                        heading={heading}
                        subHeading={subHeading}
                        options={options}
                        style={HeaderStyle}
                    />
                ) : null}
                {this.props.children}
                {this.props.content ? (
                    <BoxerContent style={ContentStyle}>
                        {this.props.content}
                    </BoxerContent>
                ) : null}
            </div>
        )
    }
}
