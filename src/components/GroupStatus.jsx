import React from 'react'
import values from "../default.json"
import StatusWindow from '../pages/StatusWindow'

const GroupStatus = ({ content,groupby, order }) => {
    return (
        <div className="px-2 flex flex-wrap max-w-screen-2xl">
            {values.status.map((s) => {
                return <StatusWindow key={s} data={content} groupby={groupby} order={order} value={s} />
            })}
        </div>
    )
}

export default GroupStatus
