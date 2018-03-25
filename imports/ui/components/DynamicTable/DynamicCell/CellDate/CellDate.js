import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'

import EditPopup from '../../EditPopup/EditPopup'

export default (CellDate = props => {
    const { value, editable } = props
    let output = <div className="d-flex between">{value}</div>
    const mode = props.multi ? 'multiple' : 'default'

    if (editable) {
        const inp = (
            <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
        )

        output = (
            <div className="d-flex between">
                {value}
                <EditPopup content={inp} />
            </div>
        )
    }

    return output
})
