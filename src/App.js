import React,{useState,useEffect} from "react";
import axios from "axios";
import LandingPage from "./pages/LandingPage";

function App() {
  const [user, setUser] = useState([]);
  const [tickets, setTicket] = useState([]);

  useEffect(() => {
    axios.get("https://apimocha.com/quicksell/data")
      .then((response) => {
        setUser(response.data.users);
        setTicket(response.data.tickets);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
      <LandingPage content={tickets} owner={user} />
    </div>

  );
}

export default App;
