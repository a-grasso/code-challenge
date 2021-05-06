import React from "react";
import { FaTimes } from "react-icons/fa";

const Launch = ({ launch, onDelete }) => {
  return (
    <div className="launch">
      <h3>
        Mission: {launch.id}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(launch.id)}
        />
      </h3>
      <p>Codename: {launch.mission_name}</p>
    </div>
  );
};

export default Launch;
