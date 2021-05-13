import "./App.css";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LAUNCHES } from "./GraphQL/Queries";
import Header from "./Components/Header";
import Launches from "./Components/Launches";
import Footer from "./Components/Footer";
import FilterLaunches from "./Components/FilterLaunches";

function App() {
  const [showFilterLaunches, setShowFilterLaunches] = useState(false);

  const { loading, error, data } = useQuery(GET_ALL_LAUNCHES);
  const init = [
    {
      id: "Loading...",
      mission_name: "Loading...",
      rocket: { rocket_name: "Loading...", rocket_type: "Loading..." },
      launch_site: { site_name_long: "Loading..." },
      launch_date_utc: "Loading...",
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

  // Query GET_ALL_LAUNCHES returns duplications
  const l = launches.filter((launch) => launch.mission_name !== "CRS-21");

  // Delete Launch
  const deleteLaunch = (id) => {
    setLaunches(launches.filter((launch) => launch.id !== id));
  };

  // Reset Launches
  const resetLaunches = () => {
    setLaunches(launchesRAW);
  };

  // Sort Launches
  const sortLaunches = () => {
    const l = launches.filter((launch) => launch).sort((a, b) => b.id - a.id);
    setLaunches(l);
  };

  // Filter for successed launches
  const filterSuccess = () => {
    const l = launches.filter((launch) => launch.launch_success === true);
    setLaunches(l);
  };

  // Filter for failed launches
  const filterFail = () => {
    const l = launches.filter((launch) => launch.launch_success === false);
    setLaunches(l);
  };

  // Filter for launches on/after/before date or for site
  const filter = (filter) => {
    const date = filter.date;
    const before = filter.before;
    const after = filter.after;
    const site = filter.site;

    let l = [];

    if (site) {
      l = launches.filter(
        (launch) => launch.launch_site.site_name_long == site
      );
    }

    if (date) {
      if (before) {
        l = l.filter((launch) => launch.launch_date_utc.split("T")[0] <= date);
        setLaunches(l);
        return;
      }

      if (after) {
        l = l.filter((launch) => launch.launch_date_utc.split("T")[0] >= date);
        setLaunches(l);
        return;
      }

      l = l.filter((launch) => launch.launch_date_utc.split("T")[0] === date);
      setLaunches(l);
      return;
    }

    setLaunches(l);
    return;
  };

  return (
    <div className="container">
      <Header
        onClickSort={sortLaunches}
        onClickReset={resetLaunches}
        onClickCurrentSuccess={filterSuccess}
        onClickCurrentFail={filterFail}
        onShowFilter={() => setShowFilterLaunches(!showFilterLaunches)}
      />
      {showFilterLaunches && <FilterLaunches onFilter={filter} />}
      {l.length > 0 ? (
        <Launches launches={l} onDelete={deleteLaunch} />
      ) : (
        "No Launches To Track :("
      )}
      <Footer />
    </div>
  );
}
export default App;
