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
        case 'user': group.sort(function(a,b){
            let y=b.userId.split("-"); 
            let x=a.userId.split("-");
           return x[1]-y[1]})
        break;
        default: group.sort((a,b)=> b.priority - a.priority)
    }
    
    
    return (
        <div className='rounded-md px-1 max-w-xs border-2 border-gray-500'>
            <div className=' px-3 py-2 text-sm flex justify-start gap-3 w-60'>
                <p className=' font-medium'>{value}</p>
                <p className=' '>{group.length}</p>
            </div>
            <Card item={group} />
        </div>
    )
}

export default StatusWindow;
