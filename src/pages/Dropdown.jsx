import React, { useState } from 'react'

const Dropdown = ({ handleGroupValue}) => {
    const [value, setGroup] = useState();
    const handleChange = (e) => {
        setGroup(e.target.value);
        handleGroupValue(value)
    }
    console.log("Dropdown:"+value)
    return (
        <div>
            <div name="display" className=' m-1 px-2 py-4 rounded-md border-1 border-black bg-[#f8f8fa] shadow-sm text-xs w-48'>
                <div className=' flex justify-between'>
                    <label>Grouping by :</label>
                    <select className=' m-1 border-1 border-black rounded-sm' onChange={handleChange}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <br />
                <div className=' flex justify-between'>
                    <label>Ordering by :</label>
                    <select name="order" id="order" className=' m-1 border-1 border-black rounded-sm'>
                        <option value="priority">Priority</option>
                    </select></div>
            </div>

        </div>
    )
}

export default Dropdown;