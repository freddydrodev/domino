import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'

import numeral from 'numeral'

export default class Summary extends Component {
    state = {
        summaries: [
            {
                icon: 'shopping-cart',
                title: 'Sales',
                amount: 1000000,
                increased: true,
                details: {
                    completed: { amount: 100, data: [1, 2, 3, 4, 5] },
                    canceled: { amount: 50, data: [1, 2, 3, 4, 5] }
                }
            },
            {
                icon: 'profile',
                title: 'Orders',
                amount: 200,
                increased: false,
                details: {
                    completed: { amount: 100, data: [1, 2, 3, 4, 5] },
                    canceled: { amount: 50, data: [1, 2, 3, 4, 5] }
                }
            },
            {
                icon: 'user',
                title: 'Customers',
                amount: 50,
                increased: true,
                details: {
                    completed: { amount: 100, data: [1, 2, 3, 4, 5] },
                    canceled: { amount: 50, data: [1, 2, 3, 4, 5] }
                }
            }
        ]
    }

    render() {
        let summaries = null
        if (this.state.summaries.length > 0) {
            summaries = this.state.summaries.map((sum, index) => (
                <Col span={8} key={index}>
                    <div
                        className={`box p-3 ${sum.title.toLocaleLowerCase()} text-white`}
                    >
                        <Icon type={sum.icon} className="ghost" />
                        <h3>{sum.title}</h3>
                        <h2 className="mb-0">${sum.amount}</h2>
                        <p className="small">
                            {sum.increased ? '1000 more' : '1000 less'} than
                            last month
                        </p>
                    </div>
                </Col>
            ))
        }
        return <Row gutter={24}>{summaries}</Row>
    }
}
