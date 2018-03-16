import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import { LineChart, Line } from 'recharts'

import numeral from 'numeral'

export default class Summary extends Component {
    state = {
        summaries: [
            {
                icon: 'shopping-cart',
                title: 'Sales',
                amount: 1000000,
                type: 'money',
                increased: true,
                details: [
                    {
                        icon: 'credit-card',
                        amount: 50,
                        msg: 'with credit card',
                        data: [
                            { name: 'Jan', value: 6000 },
                            { name: 'Feb', value: 4000 },
                            { name: 'Mar', value: 5000 },
                            { name: 'Apr', value: 3000 },
                            { name: 'May', value: 7000 },
                            { name: 'Jun', value: 7500 },
                            { name: 'Jul', value: 5500 },
                        ]
                    },
                    {
                        icon: 'wallet',
                        amount: 50,
                        msg: 'with cash',
                        data: [
                            { name: 'Jan', value: 6000 },
                            { name: 'Feb', value: 700 },
                            { name: 'Mar', value: 0 },
                            { name: 'Apr', value: 10000 },
                            { name: 'May', value: 1500 },
                            { name: 'Jun', value: 4000 },
                            { name: 'Jul', value: 2000 },
                        ]
                    }
                ]
            },
            {
                icon: 'profile',
                title: 'Orders',
                amount: 100,
                type: 'amount',
                increased: false,
                details: [
                    {
                        icon: 'check',
                        amount: 50,
                        msg: 'Orders Completed',
                        data: [
                            { name: 'Jan', value: 6000 },
                            { name: 'Feb', value: 5000 },
                            { name: 'Mar', value: 4000 },
                            { name: 'Apr', value: 3000 },
                            { name: 'May', value: 2000 },
                            { name: 'Jun', value: 1000 },
                        ]
                    },
                    {
                        icon: 'close',
                        amount: 50,
                        msg: 'Orders Canceled',
                        data: [
                            { name: 'Jan', value: 0 },
                        ]
                    }
                ]
            },
            {
                icon: 'team',
                title: 'Users',
                amount: 50,
                type: 'amount',
                increased: true,
                details: [
                    {
                        icon: 'customer-service',
                        amount: 20,
                        msg: 'Employee Registed',
                        data: [
                            { name: 'Jan', value: 10 },
                        ]
                    },
                    {
                        icon: 'user',
                        amount: 30,
                        msg: 'Customer Registed',
                        data: [
                            { name: 'Jan', value: 0 },
                            { name: 'Feb', value: 0 },
                            { name: 'Mar', value: 0 },
                            { name: 'Apr', value: 0 },
                            { name: 'May', value: 0 },
                            { name: 'Jun', value: 0 },
                            { name: 'Jul', value: 0 },
                        ]
                    }
                ]
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
                    {sum.details.map((detail, i) => (
                        <div className="d-flex between middle" key={i}>
                            <p>
                                <Icon
                                    type={detail.icon}
                                    className="text-primary"
                                />
                                <small className="ml-2">
                                    {detail.amount} {detail.msg}
                                </small>
                            </p>
                            
                            <LineChart
                                width={80}
                                height={20}
                                data={detail.data}
                            >
                                <Line
                                    type="monotone"
                                    stroke="#8884d8"
                                    dataKey="value"
                                />
                            </LineChart>
                        </div>
                    ))}
                </Col>
            ))
        }
        return <Row gutter={24} className="summary">{summaries}</Row>
    }
}
