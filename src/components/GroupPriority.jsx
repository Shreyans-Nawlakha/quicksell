import React from 'react'
import values from "../default.json"
import PriorityWindow from '../pages/PriorityWindow'
const GroupPriority = ({content}) => {
    return (
        <div className=" px-2 flex justify-start">
            {values.priority.map((e) => {
                return (
                    <PriorityWindow data={content} pri={e.n} header={e.value} />
                )
            })}
        </div>
    )
}
export default GroupPriority
