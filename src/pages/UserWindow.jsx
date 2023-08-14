import React from 'react'
import Card from '../components/Card'
import {AiOutlinePlus} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs"

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
    return (
        <div>
        <div className='px-2 rounded-md max-w-xs mb-4'>
            <div className=' px-4 py-2 text-sm flex justify-between gap-3 w-[245px]'>
                <div className=' flex gap-2'>
                    <p className=' font-medium'>{username}</p>
                    <p>{group.length}</p>
                </div>
                <div className=' flex justify-center gap-1'>
                    <AiOutlinePlus />
                    <BsThreeDots />
                </div>
            </div>
            <Card item={group} />
        </div>
    </div>
    )
}

export default UserWindow
