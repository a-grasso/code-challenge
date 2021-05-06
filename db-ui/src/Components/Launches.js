import React from "react";
import PropTypes from "prop-types";
import Task from "./Launch"
import Launch from "./Launch"

const Launches = ({ launches }) => {
  return (
    <>
    {launches.launches.map((launch) => {
      return <Launch key={launch.id} launch={launch}/>
    })}
    </>
  );
};

export default Launches;
