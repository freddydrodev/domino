import React, { Component } from 'react'
import { Card, Icon, Avatar, Carousel } from 'antd'
const { Meta } = Card
import moment from 'moment'

import Boxer from '../Boxer/Boxer'
import { paddingRect as padding } from '../../utils/'

const format = 'ddd, Do MMM YYYY'
const { Box, Content, Header } = Boxer
export default class LastestProduct extends Component {
    state = {
        products: [
            {
                _id: 'abcd',
                name: 'T-shirst Nike',
                price: 40,
                category: 'Vetement',
                quantity: [
                    { tag: 'Red', ammount: 12 },
                    { tag: 'Blue', ammount: 15 },
                    { tag: 'Black and White', ammount: 20 }
                ],
                img:
                    'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                shared: true,
                postedBy: 'Fredius Tout Court'
            },
            {
                _id: 'abcde',
                name: 'T-shirst Nike',
                price: 40,
                category: 'Vetement',
                quantity: [
                    { tag: 'Red', ammount: 12 },
                    { tag: 'Blue', ammount: 15 },
                    { tag: 'Black and White', ammount: 20 }
                ],
                img: null,
                shared: true,
                postedBy: 'Fredius Tout Court'
            },
            {
                _id: 'abcdef',
                name: 'T-shirst Nike',
                price: 40,
                category: 'Vetement',
                quantity: [
                    { tag: 'Red', ammount: 12 },
                    { tag: 'Blue', ammount: 15 },
                    { tag: 'Black and White', ammount: 20 }
                ],
                img:
                    'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                shared: true,
                postedBy: 'Fredius Tout Court'
            }
        ]
    }

    render() {
        const carousel = (
            <Carousel autoplay dots={false}>
                {this.state.products.map(pdct => (
                    <Card
                        bordered={false}
                        key={pdct._id}
                        cover={
                            pdct.img ? (
                                <img alt="example" src={pdct.img} />
                            ) : null
                        }
                        actions={[
                            <Icon type="setting" />,
                            <Icon type="edit" />,
                            <Icon type="ellipsis" />
                        ]}
                    >
                        <Box
                            style={{
                                boxShadow: 'none',
                                marginBottom: 0
                            }}
                        >
                            <div className="d-flex between fill">
                                <div>
                                    <h4 className="mb-0">{pdct.name}</h4>
                                    <small className="opac-5">
                                        <strong>Name</strong>
                                    </small>
                                </div>
                                <div className="text-right">
                                    <h4 className="mb-0">{pdct.category}</h4>
                                    <small className="opac-5">
                                        <strong>Category</strong>
                                    </small>
                                </div>
                            </div>
                            <div className="d-flex fill between">
                                <div>
                                    <h4 className="mb-0">{pdct.price}</h4>
                                    <small className="opac-5">
                                        <strong>Price</strong>
                                    </small>
                                </div>
                                <div className="text-right">
                                    <h4 className="mb-0">{pdct.postedBy}</h4>
                                    <small className="opac-5">
                                        <strong>Posted by</strong>
                                    </small>
                                </div>
                            </div>
                        </Box>
                    </Card>
                ))}
            </Carousel>
        )

        return (
            <Box content={carousel}>
                <Header
                    padding={padding}
                    heading="Lastest Added Products"
                    subHeading="last addition 10 min ago"
                />
            </Box>
        )
    }
}
