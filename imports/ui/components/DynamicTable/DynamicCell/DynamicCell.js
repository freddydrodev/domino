import React from 'react'

import CellSwitch from './CellSwitch/CellSwitch'

export default (dynamicCell = props => {
    let content = null
    const { name, data, editable, selected } = props.type

    switch (props.type.name) {
        case 'switch':
            content = <CellSwitch data={data} editable={editable} selected={selected} value={props.value} />
            break
        case 'images':
            break
        case 'listSingle':
            break
        case 'listMulti':
            break
        case 'number':
            break
        case 'chart':
            break
        case 'text':
            break
        case 'option':
            break
        default:
            break
    }
    return content
})
