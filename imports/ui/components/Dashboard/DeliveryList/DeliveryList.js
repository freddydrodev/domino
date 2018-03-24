import React, { Component } from 'react'
import { List, Icon } from 'antd'

const { Item } = List
const { Meta } = Item
const listData = [
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
    },
    {
        title: '#AF5C5'
    }
]

export default class DeliveryList extends Component {
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={listData}
                renderItem={item => (
                    <Item>
                        <Meta
                            title={
                                <a href="https://ant.design">{item.title}</a>
                            }
                            description={
                                <p className="d-flex between">
                                    <span>
                                        <Icon type="user" />Diomande Dro Freddy
                                        Junior
                                    </span>
                                    <span>
                                        <Icon type="phone" />+22541203577
                                    </span>
                                </p>
                            }
                        />
                    </Item>
                )}
            />
        )
    }
}
