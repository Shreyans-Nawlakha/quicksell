import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = ({ ticketsCallBack, userCallBack }) => {
  const [user, setUser] = useState([]);
  const [tickets, setTicket] = useState([]);

  useEffect(() => {
    axios.get("https://apimocha.com/quicksell/data")
      .then((response) => {
        setUser(response.data.user);
        setTicket(response.data.tickets);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  ticketsCallBack = tickets;
  userCallBack = user;
  return (
    <>
    </>
  );
};
//<li key={item.id}>{item.title}</li>
export default FetchData;