// card ke andar tickets wala data pass hoga
import React from 'react';
import request from "../images/circle.png"
const Card = ({ item, user }) => {
    function getname(userId) {
        for (const item of user) {
            if (item.id === userId) {
                return <p>{item.name}</p>
            }
        }
    }
    const data = item;
    return (
        <>
            {data.map((item) => {
                return (
                    <div className=" max-w-md px-3 py-2 m-1 bg-white border border-gray-200 rounded-lg shadow-md" key={item.id}>
                        <div className="mb-3 px-1 font-normal text-xs dark:text-gray-400 flex justify-between">
                            <p>{item.id}</p>
                            <p>{item.userId}</p>
                        </div>
                        <>
                            {/* <img src="" alt="Todo" /> */}
                            <p className="mb-2 text-lg font-medium tracking-tight text-gray-900 text-left ">{item.title}</p>
                        </>
                        <button className="p-1 h-6 border rounded-lg shadow-md text-[10px] flex" disabled>
                            <img src={request} alt="o" className=' w-2 align-baseline pt-1 fill-slate-500' /> &nbsp;
                            {item.tag}
                        </button>
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