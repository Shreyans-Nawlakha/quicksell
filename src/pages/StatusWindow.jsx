import React from 'react'
import Card from '../components/Card';
// these frame are according to the status 
const StatusWindow = ({ data, value, order }) => {
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
    switch(order){
        case 'priority': group.sort((a,b)=> b.priority - a.priority)
        break;
        case 'user': group.sort((a,b)=> b.userId - a.userId)
        break;
        default: group.sort((a,b)=> b.priority - a.priority)
    }
    
    
    return (
        <div className='rounded-md px-1 max-w-xs'>
            <div className=' p-2 font-semibold text-lg flex justify-between w-64'>
                <p>{value}</p>
                <p>{group.length}</p>
            </div>
            <Card item={group} />
        </div>
    )
}

export default StatusWindow;
