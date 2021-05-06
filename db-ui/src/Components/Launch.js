import React from 'react'

const Launch = ({launch}) => {
    return (
        <div className = "launch">
            <h3>Mission: {launch.id}</h3>
            <p>Codename: {launch.mission_name}</p>
        </div>
    )
}



export default Launch
