import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon, Input, Button, Badge, Avatar } from 'antd'

const { Header } = Layout
const { Item } = Menu
const { Search } = Input

btnStyle = { marginRight: 24 }
const menu = (
    <Menu
        mode="horizontal"
        className="d-flex right middle border-0"
        style={{ marginRight: 20 }}
    >
        <Item key="2" className="border-0">
            <Button
                style={btnStyle}
                className="border-0 rounded-0 w-100 h-100 shadow-0 p-0 bg-none"
            >
                <Badge count={10}>
                    <Icon type="notification" className="ft-18" />
                </Badge>
            </Button>
        </Item>
        <Item key="3" className="border-0">
            <Button
                style={btnStyle}
                className="border-0 rounded-0 w-100 h-100 shadow-0 p-0 bg-none"
            >
                <Badge count={10}>
                    <Icon type="message" className="ft-18" />
                </Badge>
            </Button>
        </Item>
        <Item key="4" className="border-0">
            <Button
                style={btnStyle}
                className="border-0 rounded-0 w-100 h-100 shadow-0 p-0 bg-none"
            >
                <Badge dot status="success" count={1}>
                    Diomande Dro Freddy Junior
                    <Avatar
                        style={{ marginLeft: 5 }}
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                </Badge>
            </Button>
        </Item>
    </Menu>
)

export default class MenuTop extends Component {
    render() {
        return (
            <Header className="shadow-left header p-0 d-flex between middle flex-fill fixed-top-right">
                <Input
                    placeholder="Search category, product, order, sales, customers..."
                    prefix={<Icon type="search" />}
                    ref={node => (this.searchTop = node)}
                    className="border-input-0 shadow-0"
                />
                <h1 className="text-center logo m-0">Domino.</h1>
                {menu}
            </Header>
        )
    }
}
