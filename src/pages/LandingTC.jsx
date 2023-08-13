import React, { useState } from 'react'
import settings from "../images/setting.png"
import down from "../images/down-arrow.svg"
import StatusWindow from "./StatusWindow";
import Dropdown from './Dropdown';
import PriorityWindow from './PriorityWindow';
import values from "../default.json"

const LandingTC = ({ content, owner }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    // get the value of order ie status priority etc
    const [group, setGroup] = useState("");
    // useEffect(() => {
    //         handleGroupValue()},
    //         [group])
    const handleGroupValue = (e) => {
        setGroup(e)
    }
    console.log(group)
    return (
        <div>
            <div className="bg-[#ffffff] px-2 py-4 border rounded-md shadow-sm">
                {group}
                <button onClick={handleClick} className=' px-1 py-2 border-2 rounded-md shadow-md shadow-gray-500 scale-75 flex align-baseline'>
                    <img src={settings} alt='settings' className=' w-6 float-left' />
                    <p>&nbsp; Display  &nbsp;</p>
                    <img src={down} alt="v" className='w-3 pt-2' />
                </button>
            </div>
            {show && <Dropdown handleGroupValue={handleGroupValue} />}
            {group==="status" && console.log("hello!")}
            <div className='bg-[#edebeb]'>
                {(() => {
                    switch ({ group }) {
                        case "status": return (<div className=" px-2 flex justify-start">
                            {values.status.map((s) => {
                                return <StatusWindow data={content} user={owner} value={s} />
                            })}
                        </div>);
                        case "priority": return (<div className=" px-2 flex justify-start">
                            {values.priority.map((e) => {
                                return (
                                    <PriorityWindow data={content} user={owner} pri={e.n} header={e.value} />
                                )
                            })}
                        </div>);
                        case "user": return <>hwllo!</>;
                        default: return (<div className=" px-2 flex justify-start">
                            {values.priority.map((e) => {
                                return <PriorityWindow data={content} user={owner} pri={e.n} header={e.value} />
                            })}</div>);
                    }
                })()}
            </div>
        </div>
    )
}

export default LandingTC;
