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
            <div className="px-2 py-2 border rounded-md shadow-sm flex justify-between items-center ">
                <button onClick={handleClick} className=' px-1 py-2 border-2 rounded-md shadow-md shadow-gray-500 scale-75 flex align-baseline '>
                    <img src={settings} alt='settings' className=' w-6 float-left' />
                    <p>&nbsp; Display  &nbsp;</p>
                    <img src={down} alt="v" className='w-3 pt-2' />
                </button>
                <span className=' font-sans font-semibold text-xl px-4 flex items-center bg-gradient-to-r from-blue-600 from-10% via-green-500 via-50% to-indigo-500 to-78% text-transparent bg-clip-text'>KANBAN BOARD <HiOutlineClipboard className='scale-125 mx-2 text-black'/> </span>
            </div>
            {show && <Dropdown setGroup={setGroup} setOrder={setOrder} />}
            <div className=' bg-[#eae9e9]'>
                {group === "status" && <GroupStatus content={content} order={order} />}
                {group === "priority" && <GroupPriority content={content} order={order} />}
                {group === "user" && <GroupUser content={content} order={order}/>}
            </div>
        </div>
    )
}

export default LandingPage;
