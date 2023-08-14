import React, { useState } from 'react'
import settings from "../images/setting.png"
import down from "../images/down-arrow.svg"
import Dropdown from './Dropdown';
import GroupStatus from '../components/GroupStatus';
import GroupPriority from '../components/GroupPriority';
import GroupUser from '../components/GroupUser';
import {HiOutlineClipboard} from "react-icons/hi"

const LandingPage = ({ content, owner }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    // get the value of order ie status priority etc
    const [group, setGroup] = useState("priority");
    const [order, setOrder] = useState("user");
    return (
        <div>
            <div className="px-2 py-2 border rounded-md shadow-sm flex h-16 justify-between items-center bg-[#ffffff] max-w-screen-2xl">
                <button onClick={handleClick} className=' px-2  py-1 border-2 rounded-md shadow-md shadow-gray-500 scale-75 flex gap-2 align-baseline max-w-fit'>
                    <img src={settings} alt='settings' className=' max-w-[24px] float-left' />
                    <p>Display</p>
                    <img src={down} alt="v" className='w-3 pt-2 pr-1' />
                </button>
                <span className=' font-sans font-semibold text-lg px-4 flex gap-0 items-center bg-gradient-to-r from-blue-600 from-10% via-green-500 via-50% to-indigo-500 to-78% text-transparent bg-clip-text'>
                <HiOutlineClipboard className='scale-125 mx-1 text-black'/> 
                    <span className=' pl-2 justify-items-center'>KANBAN BOARD</span> </span>
            </div>
            {show && <Dropdown setGroup={setGroup} setOrder={setOrder} setShow={setShow}/>}
            <div className=' bg-[rgb(234,233,233)] max-h-screen 2xl:flex 2xl:justify-center xl:mt-1'>
                {group === "status" && <GroupStatus content={content} order={order} />}
                {group === "priority" && <GroupPriority content={content} order={order} />}
                {group === "user" && <GroupUser content={content} order={order}/>}
            </div>
        </div>
    )
}

export default LandingPage;
