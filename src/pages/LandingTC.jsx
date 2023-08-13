import React, { useState } from 'react'
import settings from "../images/setting.png"
import down from "../images/down-arrow.svg"
import StatusWindow from "./StatusWindow";
import Dropdown from './Dropdown';
import PriorityWindow from './PriorityWindow';
import values from "../default.json"
import GroupStatus from '../components/GroupStatus';
import GroupPriority from '../components/GroupPriority';

const LandingTC = ({ content, owner }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    // get the value of order ie status priority etc
    const [group, setGroup] = useState("status");
    console.log(group)
    return (
        <div>
            <div className="bg-[#ffffff] px-2 py-4 border rounded-md shadow-sm">
                <button onClick={handleClick} className=' px-1 py-2 border-2 rounded-md shadow-md shadow-gray-500 scale-75 flex align-baseline'>
                    <img src={settings} alt='settings' className=' w-6 float-left' />
                    <p>&nbsp; Display  &nbsp;</p>
                    <img src={down} alt="v" className='w-3 pt-2' />
                </button>
            </div>
            {show && <Dropdown setGroup={setGroup} />}
            <div className='bg-[#edebeb]'>
                {group==="status" && <GroupStatus content={content}/>}
                {group==="priority" && <GroupPriority content={content}/>}
            </div>
        </div>
    )
}

export default LandingTC;
