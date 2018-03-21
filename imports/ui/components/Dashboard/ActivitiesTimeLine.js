import React, { Component } from 'react'
import { Icon, Timeline } from 'antd'
import moment from 'moment'

import Boxer from '../Boxer/Boxer'
import { paddingRect as padding } from '../../utils/'

const format = 'ddd, Do MMM YYYY'
const { Box } = Boxer
const { Item } = Timeline

export default class ActivitiesTimeLine extends Component {
    state = {
        activities: [
            {
                _id: '35qwneb',
                type: 'sales',
                user: 'Fredius Tc',
                action: 'sold 12 product',
                time: moment().format(format)
            },
            {
                _id: 'asdv',
                type: 'connection',
                user: 'Majest Steph',
                action: 'Logged in',
                time: moment().format(format)
            },
            {
                _id: 'wsahgdk',
                type: 'product',
                user: 'Andreas Chimene',
                action: 'added a new product',
                time: moment().format(format)
            }
        ]
    }

    render() {
        const timeline = (
            <Timeline>
                {this.state.activities.map(act => {
                    let dot = null
                    let color = 'real-blue'
                    switch (act.type) {
                        case 'sales':
                            dot = (
                                <Icon
                                    type="shopping-cart"
                                    style={{
                                        fontSize: 16
                                    }}
                                />
                            )
                            color = 'orange'
                            break
                        case 'connection':
                            dot = (
                                <Icon
                                    type="retweet"
                                    style={{
                                        fontSize: 16
                                    }}
                                />
                            )
                            color = 'green'
                            break
                        default:
                            color = 'real-blue'
                            dot = null
                    }
                    return (
                        <Item key={act._id} dot={dot} color={color}>
                            {act.user} {act.action}{' '}
                            <span className="opac-6 small">({act.time})</span>
                        </Item>
                    )
                })}
            </Timeline>
        )
        return (
            <Box
                padding={padding}
                content={timeline}
                heading="Activities Timeline"
                subHeading="10 last activities"
            />
        )
    }
}
