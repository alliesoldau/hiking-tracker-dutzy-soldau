import { DomPlatform } from 'chart.js';
import React from 'react';
import { Link } from "react-router-dom"

function Mountain({ mtn }) {

    const triangleStyling = {
        width: "0",
        height: "0",
        border: `30px solid transparent`,
        borderTop: "0",
        borderBottom: `40px solid #5C4033`,
    }

    return(
        <div className="Mountain">
            <Link to={`/mountain/${mtn.id}/edit`} >
                <div className="triangle" style={triangleStyling}></div>
                {mtn.name}
            </Link>
        </div>
    )
}

export default Mountain;