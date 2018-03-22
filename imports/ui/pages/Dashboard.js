import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import {
    boxTransparent as transparent,
    paddingRect as padding
} from '../utils/'

import Boxer from '../components/Boxer/Boxer'
import Summary from '../components/Dashboard/Summary'
import MapShops from '../components/Dashboard/MapShops'
import DeliveryList from '../components/Dashboard/DeliveryList'
import RecentOrders from '../components/ComplexList/RecentOrders'
import LastestProducts from '../components/Dashboard/LastestProducts'
import DeliveryCalendar from '../components/Dashboard/DeliveryCalendar'
import ActivitiesTimeLine from '../components/Dashboard/ActivitiesTimeLine'

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
                <Row>
                    <Col>
                        <Box
                            heading="Customer Location"
                            subHeading="This is the map previous of the customers related to the actual shop"
                            padding={padding}
                        >
                            {/* <MapShops isMarkerShown googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" mapElement={<div style={{ height: `100%` }} />} /> */}
                        </Box>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={8}>
                        <LastestProducts />
                    </Col>
                    <Col span={8}>
                        <Box
                            padding={padding}
                            content={
                                <p className="opac-3">No current message</p>
                            }
                            heading="Lastest Message"
                            subHeading="message coming from Facebook Messenger"
                        />
                    </Col>
                    <Col span={8}>
                        <ActivitiesTimeLine />
                    </Col>
                </Row>
            </Content>
        )
    }
}
