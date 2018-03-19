import React, { Component } from 'react'
import { Avatar } from 'antd'

export default class ComplexListItem extends Component {
    render() {
        const className = `complex-list-item py-2 border-bottom-1 d-flex middle`

        return (
            <div
                className={className}
                style={{ borderBottom: '1px solid #eee' }}
            >
                {this.props.img && (
                    <div>
                        <Avatar
                            style={{ marginRight: 5 }}
                            size="large"
                            src={this.props.img}
                        />
                    </div>
                )}
                <div className="w-100">
                    <div className="d-flex between middle">
                        {this.props.header && (
                            <h4 className="mb-1">{this.props.header}</h4>
                        )}
                        {this.props.subHeader && (
                            <h5 className="mb-1">{this.props.subHeader}</h5>
                        )}
                    </div>
                    <div className="d-flex">
                        <div className="w-100">
                            {this.props.title && (
                                <p className="mb-1">{this.props.title}</p>
                            )}
                            {this.props.description && (
                                <p className="mb-1 opac-8">
                                    {this.props.description}
                                </p>
                            )}
                            <div className="d-flex between middle w-100 opac-5">
                                {this.props.options && (
                                    <small>{this.props.options}</small>
                                )}
                                {this.props.attached && (
                                    <small>{this.props.attached}</small>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
