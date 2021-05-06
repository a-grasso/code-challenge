import React from "react";
import Launch from "./Launch"

const Launches = ({ launches, onDelete }) => {
  console.log(launches);
  return (
    <>
    {launches.map((launch) => {
      return <Launch key={launch.id} launch={launch} onDelete = {onDelete}/>
    })}
    </>
  );
};

export default Launches;
