import React, { Component } from 'react'
import { Calendar, Badge } from 'antd'

import moment from 'moment'

const format = 'ddd, Do MMM YYYY'
const processing = <Badge dot status="processing" className="badge-dot" />

export default class DeliveryCalendar extends Component {
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
                return processing
                break
            default:
                return
        }
    }

    monthCellRender = e => {
        switch (e.month()) {
            case 2:
                return processing
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
            <Calendar
                onSelect={this.onSelect}
                fullscreen={false}
                dateCellRender={this.dateCellRender}
                monthCellRender={this.monthCellRender}
                style={{paddingBottom: 12}}
            />
        )
    }
}
