import React from 'react';
import Card from '../components/Card';
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { TbAlertSquareFilled } from "react-icons/tb"
import { MdSignalCellular1Bar, MdSignalCellular3Bar, MdSignalCellular4Bar } from "react-icons/md"

const PriorityWindow = ({ data,groupby, order, pri, header }) => {
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
    switch (order) {
        case 'priority': group.sort((a, b) => b.priority - a.priority)
            break;
        case 'user':
            group.sort(function (a, b) {
                let y = b.userId.split("-");
                let x = a.userId.split("-");
                return x[1] - y[1]
            })
            break;
        default: group.sort((a, b) => b.priority - a.priority)
    }
    return (
        <div>
            <div className='px-1 rounded-md max-w-xs mb-4'>
                <div className=' px-4 py-2 text-sm flex justify-between gap-3 w-[245px]'>
                    <div className=' flex items-center gap-2'>
                        <span className=''>
                            {/* <AiOutlineFieldNumber className='m-1'/> */}
                            {pri === 0 && <BsThreeDots className=' m-1 text-gray-500' />}
                            {pri === 1 && <MdSignalCellular1Bar className='m-1 text-gray-500' />}
                            {pri === 2 && <MdSignalCellular3Bar className='m-1 text-gray-500' />}
                            {pri === 3 && <MdSignalCellular4Bar className='m-1 text-gray-500' />}
                            {pri === 4 && <TbAlertSquareFilled className='m-1 text-orange-400' />}
                        </span>
                        <p className=' font-medium'>{header}</p>
                        <p>{group.length}</p>
                    </div>
                    <div className=' flex justify-center gap-1'>
                        <AiOutlinePlus />
                        <BsThreeDots />
                    </div>
                </div>
                <Card item={group} groupby={groupby} />
            </div>
        </div>
    )
}

export default PriorityWindow
