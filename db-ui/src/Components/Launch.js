import React from "react";
import { FaTimes } from "react-icons/fa";
import Rocket from "./Rocket";

const Launch = ({ launch, onDelete }) => {
  return (
    <div
      className={`launch ${launch.launch_success ? "remindert" : "reminderf"}`}
    >
      <h3>
        Mission: {launch.mission_name}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(launch.id)}
        />
      </h3>
      <Rocket rocket={launch.rocket} />
      <p>Launch Site: {launch.launch_site.site_name_long}</p>
      <p>Launch Date (UTC): {launch.launch_date_utc}</p>
    </div>
  );
};

export default Launch;
