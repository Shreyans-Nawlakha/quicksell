import React from 'react'
import Card from '../components/Card'

const UserWindow = ({ data, order, userid, username }) => {
    const group = [];
    for (const item of data) {
        if (item.userId === userid) {
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
    switch (order) {
        case 'priority': group.sort((a, b) => b.priority - a.priority)
            break;
        case 'user': group.sort(function(a,b){
            let y=b.userId.split("-"); 
            let x=a.userId.split("-");
           return x[1]-y[1]})
            break;
        default: group.sort((a, b) => b.priority - a.priority)
    }
    console.log(group);
    return (
        <div className='rounded-md px-1 max-w-xs'>
            <div className=' p-2 font-semibold text-lg flex justify-between w-64'>
                <p>{username}</p>
                <p>{group.length}</p>
            </div>
            <Card item={group} />
        </div>
    )
}

export default UserWindow
