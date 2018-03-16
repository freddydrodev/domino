import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import Boxer from '../components/Boxer/Boxer'
import Summary from '../components/Dashboard/Summary'
import DeliveryCalendar from '../components/Dashboard/DeliveryCalendar'
import DeliveryList from '../components/Dashboard/DeliveryList'

const { Box } = Boxer
const { Content } = Layout

const padding = '12px 24px'
const transparent = { boxShadow: 0, backgroundColor: 'transparent' }
// const boxStyle
export default class Dashboard extends Component {
    render() {
        return (
            <Content>
                <h2>Dashboard</h2>
                <Row gutter={24}>
                    <Col span={16}>
                        <Summary />
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
