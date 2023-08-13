import React from 'react';
import Card from '../components/Card';

const PriorityWindow = ({ data, order, pri, header }) => {
    const group = [];
    for (const item of data) {
        if (item.priority === pri) {
            group.push(
                {
                    id: item.id,
                    title: item.title,
                    tag: item.tag,
                    userId: item.userId,
                    state: item.status,
                    Status: item.status,
                    priority: item.priority
                }
            )
        }
    }
    switch(order){
        case 'priority': group.sort((a,b)=> b.priority - a.priority)
        break;
        case 'user': 
        group.sort(function(a,b){
             let y=b.userId.split("-"); 
             let x=a.userId.split("-");
            return x[1]-y[1]})
        break;
        default: group.sort((a,b)=> b.priority - a.priority)
    }
    return (
        <div>
            <div className='px-2 rounded-md max-w-xs'>
                <div className=' px-3 py-2 text-sm flex justify-between gap-3 w-60'>
                    <p className=' font-medium'>{header}</p>
                    <p>{group.length}</p>
                </div>
                <Card item={group} />
            </div>
        </div>
    )
}

export default PriorityWindow
