import React,{useState,useEffect} from "react";
import axios from "axios";
// import LandingPage from "./pages/LandingPage";  
import LandingTC from "./pages/LandingTC";
import data from "./Data.json";
import DataSort from "./components/DataSort";

function App() {
  // const [user, setUser] = useState([]);
  // const [tickets, setTicket] = useState([]);

  // useEffect(() => {
  //   axios.get("https://apimocha.com/quicksell/data")
  //     .then((response) => {
  //       setUser(response.data.users);
  //       setTicket(response.data.tickets);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const tickets = data.tickets
  const user = data.users
  return (
    <div className="App">
      <LandingTC content={tickets} owner={user} />
    </div>

  );
}

export default App;
