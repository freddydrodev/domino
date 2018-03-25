import React from 'react'

import CellSwitch from './CellSwitch/CellSwitch'
import CellInputText from './CellInputText/CellInputText'
import CellInputNumber from './CellInputNumber/CellInputNumber'
import CellSelect from './CellSelect/CellSelect'
import CellDate from './CellDate/CellDate'

export default (dynamicCell = props => {
    let content = null
    const { type, value } = props
    const { name, editable, data, selected } = type

    switch (name) {
        case 'switch':
            content = (
                <CellSwitch
                    data={data}
                    editable={editable}
                    selected={selected}
                    value={value}
                />
            )
            break
        case 'images':
            break
        case 'selectSingle':
            content = (
                <CellSelect
                    single={true}
                    data={data}
                    editable={editable}
                    selected={selected}
                    value={value}
                />
            )
            break
        case 'selectMulti':
            content = (
                <CellSelect
                    multi={true}
                    data={data}
                    editable={editable}
                    selected={selected}
                    value={value}
                />
            )
            break
        case 'number':
            content = <CellInputNumber editable={editable} value={value} />
            break
        case 'chart':
            break
        case 'text':
            content = <CellInputText editable={editable} value={value} />
            break
        case 'date':
            content = <CellDate editable={editable} value={value} />
            break
        default:
            break
    }
    return content
})
