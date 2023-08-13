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
                    Status: item.status
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
        <div>
            <div className='rounded-md px-2'>
                <div className=' px-4 font-semibold text-lg flex justify-between'>
                    <p>{header}</p>
                    <p>{group.length}</p>
                </div>
                <Card item={group} />
            </div>
        </div>
    )
}

export default PriorityWindow
