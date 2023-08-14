import React from 'react'

const Dropdown = ({ setGroup, setOrder }) => {

    return (
        <div>
            <div className=' -mt-3 mx-1 px-2 py-2 rounded-md border-1 border-black bg-[#f8f8fa] shadow-sm text-xs w-48 absolute'>
                <div className=' flex justify-between'>
                    <label>Grouping by :</label>
                    <select className=' m-1 border-1 border-black rounded-sm' onChange={(e) => { setGroup(e.target.value) }}>
                        <option value="">--select--</option>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <br />
                <div className=' flex justify-between'>
                    <label>Ordering by :</label>
                    <select name="order" id="order" className=' m-1 border-1 border-black rounded-sm' onChange={(e) => { setOrder(e.target.value) }}>
                        <option value="">--select--</option>
                        <option value="priority">Priority</option>
                        <option value="user">user</option>
                    </select></div>
            </div>

        </div>
    )
}

export default Dropdown;