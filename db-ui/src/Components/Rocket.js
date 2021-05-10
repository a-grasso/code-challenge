import React from "react";

const Rocket = ({ rocket }) => {
  return (
    <div>
      <p>
        Rocket: {rocket.rocket_name} | Rocket Type: {rocket.rocket_type}
      </p>
    </div>
  );
};

export default Rocket;
