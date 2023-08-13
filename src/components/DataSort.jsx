// Helper function to sort tickets
import data from "../Data.json"
import React from 'react'
import Card from "./Card";

const DataSort = (tickets, order) => {

  const sortGroupTickets = (tickets, sorting) => {
    switch (sorting) {
      case 'priority':
        return tickets.slice().sort((a, b) => b.priority - a.priority);
      case 'user':
        return tickets.slice().sort((a, b) => a.userId.localeCompare(b.userId));
      default:
        return tickets;
    }
  };
  const sortTickets = (groupedTickets, sorting) => {
    return groupedTickets.map((group) => ({
      ...group,
      tickets: sortGroupTickets(group.tickets, sorting),
    }));
  };
  let output = sortTickets(tickets, "priority")
  console.log(output)
  return (
    <div>
       <br />
        <div className='rounded-md px-1 max-w-xs'>
          <div className=' p-2 font-semibold text-lg flex justify-between w-64'>
            <p>order by proirity:</p>
            <p>{output.length}</p>
          </div>
          <Card item={output} />
        </div>
    </div>
  )
}

export default DataSort
