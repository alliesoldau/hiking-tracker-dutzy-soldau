import React from 'react';

function Mountain({ mtn }) {

    const adjustedElevation = (mtn.elevation) / 50;

    const triangleHeightValue = {
        width: "0",
        height: "0",
        border: `30px solid transparent`,
        borderTop: "0",
        borderBottom: `${adjustedElevation}px solid black`,
    }

    return(
        <div className="triangle" style={triangleHeightValue}>{mtn.name}</div>
    )
}

export default Mountain;