import React from 'react'
import values from "../default.json"
import StatusWindow from '../pages/StatusWindow'

const GroupStatus = ({content,order}) => {
    return (
        <div className=" px-2 flex justify-start">
            {values.status.map((s) => {
                return <StatusWindow key={s} data={content} order={order} value={s} />
            })}
        </div>
    )
}

export default GroupStatus
