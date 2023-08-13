import React from 'react'
import values from "../default.json"
import PriorityWindow from '../pages/PriorityWindow'
const GroupPriority = ({ content, order}) => {
    return (
        <div className=" px-2 flex justify-start">
            {values.priority.map((e) => {
                return (
                    <PriorityWindow key={e.n} data={content} order={order} pri={e.n} header={e.value} />
                )
            })}
        </div>
    )
}
export default GroupPriority
