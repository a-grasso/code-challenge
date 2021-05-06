import "./App.css";
import React from "react";
import Launches from "./Components/Launches";
import Header from "./Components/Header";
import { useQuery } from "@apollo/client";
import { GET_ALL_LAUNCHES } from "./GraphQL/Queries";

function App() {

  const launches = GetAllLaunches();

  return (
    <div className="container">
      <Header />
      <Launches launches={launches} />
    </div>
  );
}

function GetAllLaunches() {
  const { loading, error, data } = useQuery(GET_ALL_LAUNCHES);

  const tmp = {"launches": [{id: "Loading..."}]}
  if (loading) return tmp;
  if (error) return tmp;

  return data ;
}

export default App;
