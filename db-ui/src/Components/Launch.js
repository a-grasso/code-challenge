import React from "react";
import { FaTimes } from "react-icons/fa";
import Rocket from "./Rocket";

const Launch = ({ launch, onDelete }) => {
  return (
    <div
      className={`launch ${launch.launch_success ? "remindert" : 'reminderf'}`}>
      <h3>
        Mission: {launch.id}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(launch.id)}
        />
      </h3>
      <p>Codename: {launch.mission_name}</p>
      <Rocket rocket={launch.rocket} />
    </div>
  );
};

export default Launch;
