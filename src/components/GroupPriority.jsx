import React from 'react'
import values from "../default.json"
import PriorityWindow from '../pages/PriorityWindow'

const GroupPriority = ({ content,groupby, order}) => {
    return (
        <div className=" px-2 flex flex-wrap max-w-screen-2xl">
            {values.priority.map((e) => {
                return (
                    <PriorityWindow key={e.n} data={content} groupby={groupby} order={order} pri={e.n} header={e.value} />
                )
            })}
        </div>
    )
}
export default GroupPriority
