import React from 'react'
import { Input } from 'antd'

import EditPopup from '../../EditPopup/EditPopup'

export default (CellInputText = props => {
    const { value, editable } = props
    let output = <div className="d-flex between">{value}</div>
    
    if (editable) {
        const inp = <Input value={value} className="rounded-0 w-100" required />

        output = (
            <div className="d-flex between">
                {value}
                <EditPopup content={inp} />
            </div>
        )
    }

    return output
})
