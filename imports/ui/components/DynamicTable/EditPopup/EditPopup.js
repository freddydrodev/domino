import React from 'react'
import { Button, Popover } from 'antd'

import './EditPopup.less';

export default (EditPopup = props => {
    const { content } = props

    return (
        <Popover
            placement="bottomRight"
            title="Edit field"
            content={content}
            trigger="click"
        >
            <Button
                className="ml-1 bg-none border-0 editPopup"
                icon="edit"
                size="small"
                shape="circle"
            />
        </Popover>
    )
})
