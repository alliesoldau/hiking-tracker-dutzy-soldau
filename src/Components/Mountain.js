import React from 'react';

function Mountain({ mtn }) {

    // some funky math to exagerate the height difference
    const adjustedElevation = ((((mtn.elevation) / 100) -20) * 3);

    const triangleHeightValue = {
        width: "0",
        height: "0",
        border: `30px solid transparent`,
        borderTop: "0",
        borderBottom: `${adjustedElevation}px solid black`,
    }

    return(
        <div className="Mountain">
            <div className="triangle" style={triangleHeightValue}>{mtn.name}</div>
        </div>
    )
}

export default Mountain;