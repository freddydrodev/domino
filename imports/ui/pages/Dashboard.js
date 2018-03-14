import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Calendar, Badge, Divider, List } from 'antd'
import moment from 'moment'

const { Content } = Layout
const format = 'ddd Do MMM YYYY'
listData = [
    {
        title: '#AF5C1'
    },
    {
        title: '#AF5C2'
    },
    {
        title: '#AF5C3'
    },
    {
        title: '#AF5C4'
    }
]

export default class Dashboard extends Component {
    state = {
        today: moment().format(format),
        selectedDate: moment().format(format)
    }

    dateCellRender = e => {
        switch (e.date()) {
            case 1:
            case 22:
            case 12:
            case 18:
                return <Badge dot status="processing" className="badge-dot" />
                break
            default:
                return
        }
    }

    monthCellRender = e => {
        switch (e.month()) {
            case 2:
                return <Badge dot status="processing" className="badge-dot" />
                break
            default:
                return
        }
    }

    onSelect = selectedDate => {
        this.setState({
            selectedDate: selectedDate.format(format)
        })
    }

    render() {
        return (
            <Content>
                <h2>Dashboard</h2>
                <Row gutter={24}>
                    <Col span={16}>
                        <Row gutter={24}>
                            <Col span={8}>
                                <div className="box sales text-white">
                                    <Icon
                                        type="shopping-cart"
                                        className="ghost"
                                    />
                                    <h3>Sales</h3>
                                    <h2>$1000000</h2>
                                    <p>test</p>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="box orders text-white">
                                    <Icon type="profile" className="ghost" />
                                    <h3>Sales</h3>
                                    <h2>$1000000</h2>
                                    <p>test</p>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="box customers text-white">
                                    <Icon type="team" className="ghost" />
                                    <h3>Sales</h3>
                                    <h2>$1000000</h2>
                                    <p>test</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <div className="box">
                            <h3>Delivery</h3>
                            <Calendar
                                onSelect={this.onSelect}
                                fullscreen={false}
                                dateCellRender={this.dateCellRender}
                                monthCellRender={this.monthCellRender}
                            />
                        </div>
                        <div className="box">
                            <h3>
                                Order For{' '}
                                <b>
                                    {this.state.selectedDate !==
                                    this.state.today
                                        ? this.state.selectedDate
                                        : 'Today'}
                                </b>
                            </h3>
                            <List
                                itemLayout="horizontal"
                                dataSource={listData}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={
                                                <a href="https://ant.design">
                                                    {item.title}
                                                </a>
                                            }
                                            description={
                                                <p className="d-flex between">
                                                    <span>
                                                        <Icon type="user" />Diomande
                                                        Dro Freddy Junior
                                                    </span>
                                                    <span>
                                                        <Icon type="phone" />+22541203577
                                                    </span>
                                                </p>
                                            }
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </Content>
        )
    }
}
