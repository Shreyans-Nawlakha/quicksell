// card ke andar tickets wala data pass hoga
import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { TbAlertSquareFilled } from "react-icons/tb"
import { MdSignalCellular4Bar } from "react-icons/md"
import { MdSignalCellular3Bar } from "react-icons/md"
import { MdSignalCellular1Bar } from "react-icons/md"
import { AiOutlineFieldNumber } from "react-icons/ai"

const Card = ({ item }) => {
    const data = item;
    return (
        <>
            {data.map((item) => {
                return (
                    <div className=" w-60 px-3 py-2 m-1 bg-white border border-gray-200 rounded-lg shadow-md" key={item.id}>
                        <div className="mb-1 px-1 text-sm dark:text-gray-400 flex justify-between">
                            <p>{item.id}</p>
                            <p>{item.userId}</p>
                        </div>
                        <>
                            {/* <img src="" alt="Todo" /> */}
                            <p className="mb-2 text-lg font-medium tracking-tight text-gray-900 text-left ">{item.title}</p>
                        </>
                        <div className=' flex gap-1'>
                            <span className='border rounded shadow-md w-6 h-6'>
                            {/* <AiOutlineFieldNumber className='m-1'/> */}
                                {item.priority === 0 && <AiOutlineFieldNumber className=' py-1'/>}
                                {item.priority === 1 && <MdSignalCellular1Bar className='m-1'/>}
                                {item.priority === 2 && <MdSignalCellular3Bar className='m-1'/>}
                                {item.priority === 3 && <MdSignalCellular4Bar className='m-1'/>}
                                {item.priority === 4 && <TbAlertSquareFilled className='m-1'/>}
                            </span>
                            <div className="p-1 h-6 w-24 border rounded-lg shadow-md text-[10px] flex items-center justify-center gap-1">
                                <BsCircleFill className=' text-gray-400' />
                                <span>{item.tag}</span>
                            </div>
                        </div>
                        {/* {getname(item.userId)} */}
                    </div>
                )
            })}
        </>
    )
}
/* 
id: dark:bg-gray-800 dark:border-gray-700 card color
title: dark:text-white
*/

export default Card;

// eslint-disable-next-line no-lone-blocks
{/* <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
</svg> */}