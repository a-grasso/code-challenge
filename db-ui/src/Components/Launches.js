import React from "react";
import PropTypes from "prop-types";

const Launches = ({ launches }) => {
  console.log(launches);
  return (
    <>
    {launches.launches.map((v) => {
      return <h1>Launch: {v.id}</h1>
    })}
    </>
  );
};

Launches.propTypes= {
  launches : PropTypes.array
}

export default Launches;
