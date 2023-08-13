import React from 'react'
import Card from '../components/Card';
// these frame are according to the status 
const StatusWindow = ({ data, user , value }) => {
    const group = [];
    for (const item of data) {
        if (item.status === value) {
            group.push(
                {
                    id: item.id,
                    title: item.title,
                    tag: item.tag,
                    userId: item.userId,
                    state: item.status,
                    priority: item.priority
                }
            )
        }
    }
    group.sort()
    return (
        <div className='rounded-md px-1 max-w-xs'>
            <div className=' p-2 font-semibold text-lg flex justify-between w-64'>
                <p>{value}</p>
                <p>{group.length}</p>
                </div>
            <Card item={group} user={user} />
        </div>
    )
}

export default StatusWindow;
