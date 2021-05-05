import "./App.css";
import React from "react";
import Launches from "./Components/Launches";
import Header from "./Components/Header";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LAUNCHES } from "./GraphQL/Queries";

function App() {

  const t = GetAllLaunches();
  const [launches, setLaunches] = useState([])
  Promise.resolve(t).then(setLaunches(t));

  return (
    <div className="container">
      <Header />
      <Launches launches={launches} />
    </div>
  );
}



function GetAllLaunches() {
  const { loading, error, data } = useQuery(GET_ALL_LAUNCHES);

  const k = {"launches": [{id: "Loading..."}]}
  if (loading) return k;
  if (error) return k;

  return ( data );
}

export default App;
