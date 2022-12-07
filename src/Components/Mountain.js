import { DomPlatform } from 'chart.js';
import React from 'react';
import { Link } from "react-router-dom"

function Mountain({ mtn }) {

    const triangleStyling = {
        width: "0",
        height: "0",
        border: `30px solid transparent`,
        borderTop: "0",
        borderBottom: `100px solid #5C4033`,
    }

    console.log(`mtn: ${mtn.notes}`)

    return(
        <div className="Mountain">
            <Link to={`/mountain/${mtn.id}/edit`} >
                <div className="triangle" style={triangleStyling}>{mtn.name}</div>
            </Link>
        </div>
    )
}

export default Mountain;