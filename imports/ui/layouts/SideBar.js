import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Layout, Menu, Button, Icon, Tooltip } from 'antd'

const { Sider } = Layout
const { Item } = Menu
const linkStyle = { height: '64px', lineHeight: '16px' }

export default class SideBar extends Component {
    state = {
        menuList: [
            { link: 'Dashboard', icon: 'home' },
            { link: 'Shops', icon: 'shop' },
            { link: 'Categories', icon: 'folder' },
            { link: 'Products', icon: 'skin' },
            { link: 'Tags', icon: 'tags-o' },
            { link: 'Orders', icon: 'profile' },
            { link: 'Sales', icon: 'shopping-cart' },
            { link: 'Delivery', icon: 'calendar' },
            { link: 'Employees', icon: 'customer-service' },
            { link: 'Customers', icon: 'team' },
            { link: 'Activities', icon: 'line-chart' }
        ]
    }
    render() {
        // display menu
        const menu = (
            <Menu
                defaultSelectedKey={['1']}
                mode="vertical"
                className="menuSide w-100 h-100 border-0"
            >
                {this.state.menuList.map((el, i) => (
                    <Item key={i} style={linkStyle}>
                        <NavLink
                            to={'/' + el.link.toLowerCase()}
                            className="nav-link-column"
                        >
                            <Icon type={el.icon} className="link-icon" />
                        </NavLink>
                    </Item>
                ))}
            </Menu>
        )

        return (
            <Sider className="shadow h-100 fixed-top-left" width={64}>
                <PerfectScrollbar>{menu}</PerfectScrollbar>
            </Sider>
        )
    }
}
