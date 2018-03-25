import React from 'react'
import { Switch } from 'antd'

import EditPopup from '../../EditPopup/EditPopup'

export default (CellSwitch = props => {
    const { data, selected, value, editable } = props
    let output = <div className="d-flex between">{value}</div>
    if (editable) {
        let isChecked = false

        if (selected) {
            if (data.indexOf(selected) === 1) {
                isChecked = true
            }
        }

        const switcher = (
            <Switch
                checkedChildren={data[0]}
                unCheckedChildren={data[1]}
                defaultChecked={isChecked}
            />
        )

        output = (
            <div className="d-flex between">
                {value}
                <EditPopup content={switcher} />
            </div>
        )
    }

    return output
})

// cellType: {
//             name: 'switch',
//             data: ['1', '2'],
//             selected: '1', //should come from record on dynamicCell component
//             editable: true
//         }
