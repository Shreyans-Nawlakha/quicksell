import React from 'react';
import Card from '../components/Card';

const PriorityWindow = ({ data, user, pri, header }) => {
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
    return (
        <div>
            <div className='rounded-md px-2'>
                <div className=' px-4 font-semibold text-lg flex justify-between'>
                    <p>{header}</p>
                    <p>{group.length}</p>
                </div>
                <Card item={group} user={user} />
            </div>
        </div>
    )
}

export default PriorityWindow
