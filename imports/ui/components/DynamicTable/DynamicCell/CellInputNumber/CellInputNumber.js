import React from 'react'
import { InputNumber } from 'antd'

import EditPopup from '../../EditPopup/EditPopup'

export default (CellInputNumber = props => {
    const { value, editable } = props
    let output = <div className="d-flex between">{value}</div>
    
    if (editable) {
        const inp = (
            <InputNumber value={value} className="w-100 rounded-0" required />
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
