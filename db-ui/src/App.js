import "./App.css";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LAUNCHES } from "./GraphQL/Queries";
import Header from "./Components/Header";
import Launches from "./Components/Launches";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_LAUNCHES);
  const init = [
    {
      id: "Loading...",
      mission_name: "Loading...",
      rocket: { rocket_name: "Loading...", rocket_type: "Loading..." },
      launch_site: { site_name_long: "Loading..." },
      launch_date_utc: "Loading..."
    },
  ];

  const [launches, setLaunches] = useState(init);
  const [launchesRAW, setLaunchesRAW] = useState(init);

  useEffect(() => {
    if (!loading && !error && data) {
      setLaunchesRAW(data.launches);
      setLaunches(data.launches);
    }
  }, [loading, error]);

  // Query GET_ALL_LAUNCHES returns duplicate
  const l = launches.filter((launch) => launch.mission_name !== "CRS-21");

  // Delete Launch
  const deleteLaunch = (id) => {
    setLaunches(launches.filter((launch) => launch.id !== id));
  };

  // Reset Launches
  const resetLaunches = (id) => {
    setLaunches(launchesRAW);
  };

  // Sort Launches
  const sortLaunches = () => {
    const l = launches.filter((launch) => launch).sort((a, b) => b.id - a.id);
    setLaunches(l);
  };

  // Filter for all successed launches
  const filterAllSuccess = (id) => {
    const l = launchesRAW.filter((launch) => launch.launch_success === true);
    setLaunches(l);
  };

  // Filter for all failed launches
  const filterAllFail = (id) => {
    const l = launchesRAW.filter((launch) => launch.launch_success === false);
    setLaunches(l);
  };

  // Filter for current successed launches
  const filterCurrentSuccess = (id) => {
    const l = launches.filter((launch) => launch.launch_success === true);
    setLaunches(l);
  };

  // Filter for current failed launches
  const filterCurrentFail = (id) => {
    const l = launches.filter((launch) => launch.launch_success === false);
    setLaunches(l);
  };

  return (
    <div className="container">
      <Header
        onClickSort={sortLaunches}
        onClickSuccess={filterAllSuccess}
        onClickFail={filterAllFail}
        onClickReset={resetLaunches}
        onClickCurrentSuccess={filterCurrentSuccess}
        onClickCurrentFail={filterCurrentFail}
      />
      {l.length > 0 ? (
        <Launches launches={l} onDelete={deleteLaunch} />
      ) : (
        "No Launches To Track :("
      )}
      <Footer />
    </div>
  );
}

// Template For Button
const onClick = () => {
  console.log("click");
};
export default App;
