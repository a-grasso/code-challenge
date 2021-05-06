import "./App.css";
import React from "react";
import Launches from "./Components/Launches";
import Header from "./Components/Header";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LAUNCHES } from "./GraphQL/Queries";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_LAUNCHES);
  const [launches, setLaunches] = useState([
    { id: "Loading...", mission_name: "Loading..." },
  ]);

  useEffect(() => {
    if (!loading && !error && data) {
      setLaunches(data.launches);
    }
  }, [loading, error]);

  // Delete Launch
  const deleteTask = (id) => {
    setLaunches(launches.filter((launch) => launch.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Launches launches={launches} onDelete={deleteTask} />
    </div>
  );
}

export default App;
