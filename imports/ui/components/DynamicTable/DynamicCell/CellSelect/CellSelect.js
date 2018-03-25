import React from 'react'
import { Select } from 'antd'

import EditPopup from '../../EditPopup/EditPopup'

const { Option } = Select

export default (CellSelect = props => {
    const { value, editable, data, selected } = props
    let output = <div className="d-flex between">{value}</div>
    const mode = props.multi ? 'multiple' : 'default';

    if (editable) {
        let defaultValue = selected ? data[selected].value : data[0].value
        const inp = (
            <Select
                value={defaultValue}
                className="w-100 rounded-0"
                defaultValue={defaultValue}
                showSearch
                mode={mode}
                style={{width: 300}}
            >
                {data.map(opt => (
                    <Option key={opt.value} value={opt.value}>
                        {opt.text}
                    </Option>
                ))}
            </Select>
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
