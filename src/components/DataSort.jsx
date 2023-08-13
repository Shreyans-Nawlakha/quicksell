const sortTickets = (groupedTickets, sorting) => {
  return groupedTickets.map((group) => ({
    ...group,
    tickets: sortGroupTickets(group.tickets, sorting),
  }));
};

const sortGroupTickets = (tickets, sorting) => {
  switch (sorting) {
    case 'priority':
      return tickets.slice().sort((a, b) => b.priority - a.priority);
    case 'title':
      return tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
    default:
      return tickets;
  }
};
