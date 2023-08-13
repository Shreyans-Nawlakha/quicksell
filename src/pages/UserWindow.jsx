import React from 'react'
import Card from '../components/Card'

const UserWindow = ({data,userid ,username}) => {
    const group = [];
    for (const item of data) {
        if (item.id === userid) {
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
