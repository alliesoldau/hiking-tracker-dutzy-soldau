import React from 'react';

function Mountain({ mtn, minElevation }) {

    // some funky math to exagerate the height difference
    const elevation = mtn.elevation
    const exageratedElevation = (((elevation - minElevation+100))/2)

    const triangleHeightValue = {
        width: "0",
        height: "0",
        border: `30px solid transparent`,
        borderTop: "0",
        borderBottom: `${exageratedElevation}px solid #5C4033`,
    }

    return(
        <div className="Mountain">
            <div className="triangle" style={triangleHeightValue}>{mtn.name}</div>
        </div>
    )
}

export default Mountain;