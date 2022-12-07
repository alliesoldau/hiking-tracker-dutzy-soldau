import { DomPlatform } from 'chart.js';
import React from 'react';
import { Link } from "react-router-dom"

function Mountain({ mtn, minElevation }) {

    // some funky math to exagerate the height difference
    const elevation = mtn.elevation
    const exageratedElevation = (((elevation - minElevation+100))/2)
    console.log(mtn.id)

    const triangleHeightValue = {
        width: "0",
        height: "0",
        border: `30px solid transparent`,
        borderTop: "0",
        borderBottom: `${exageratedElevation}px solid #5C4033`,
    }

    return(
        <div className="Mountain">
            <Link to={`/mountain/${mtn.id}/edit`}>
                <div className="triangle" style={triangleHeightValue}>{mtn.name}</div>
            </Link>
        </div>
    )
}

export default Mountain;