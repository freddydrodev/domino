import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import { boxTransparent as transparent, paddingRect as padding } from '../utils/'
import Boxer from '../components/Boxer/Boxer'
import Summary from '../components/Dashboard/Summary'
import DeliveryList from '../components/Dashboard/DeliveryList'
import RecentOrders from '../components/ComplexList/RecentOrders'
import DeliveryCalendar from '../components/Dashboard/DeliveryCalendar'

const { Box } = Boxer
const { Content } = Layout

export default class Dashboard extends Component {
    render() {
        return (
            <Content>
                <h2>Dashboard</h2>
                <Row gutter={24}>
                    <Col span={16}>
                        <Box style={transparent}>
                            <Summary />
                        </Box>
                        <RecentOrders />
                    </Col>
                    <Col span={8}>
                        <Box
                            heading="Delivery"
                            subHeading="Select a date to see deliveries"
                            padding={padding}
                        >
                            <DeliveryCalendar />
                        </Box>
                        <Box
                            heading="Delivery List"
                            subHeading="Delivery for this day"
                            padding={padding}
                            content={<DeliveryList />}
                        />
                    </Col>
                </Row>
            </Content>
        )
    }
}
