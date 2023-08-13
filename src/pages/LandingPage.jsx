import React, { useCallback, useState } from 'react'
import settings from "../images/setting.png"
import down from "../images/down-arrow.svg"
import StatusWindow from "./StatusWindow";
import Dropdown from './Dropdown';
import PriorityWindow from './PriorityWindow';

const LandingPage = ({content , owner}) => {
    
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    // get the value of order ie status priority etc
    const [group, setGroup] = useState("");
    console.log(group)

    return (
        <div>
            <div className="bg-[#ffffff] px-2 py-4 border rounded-md">
                {group}
                <button onClick={handleClick} className=' px-1 py-2 border-2 rounded-md shadow-md shadow-gray-500 scale-75 flex align-baseline'>
                    <img src={settings} alt='settings' className=' w-6 float-left' />
                    <p>&nbsp; Display  &nbsp;</p>
                    <img src={down} alt="v" className='w-3 pt-2' />
                </button>
            </div>
            {show ? <Dropdown setGroup={setGroup} /> : null}
            <div className=" px-4 flex justify-start">
                <StatusWindow data={content} user={owner} value={"Todo"} />
                <StatusWindow data={content} user={owner} value={"In progress"} />
                <StatusWindow data={content} user={owner} value={"Backlog"} />
            </div>
            <div className=" px-4 flex justify-start">
                <PriorityWindow data={content} user={owner} value={1} />
                <PriorityWindow data={content} user={owner} value={2} />
                <PriorityWindow data={content} user={owner} value={4} />
            </div>
        </div>
    )
}

export default LandingPage;
