import React, { useState } from 'react';
import Mountain from './Mountain'

function MountainCollection({ highlightedChallenge }) {

    // TO DO: Clear highlighted challenge after a click so that the data doesn't stick around

    // console.log(highlightedChallenge)

    const mountainTriangles = highlightedChallenge.map((mtn, index) => {
        return(
            <Mountain
                key={index}
                mtn={mtn}
            />
            )
        })


    return(
        <div className="MountainCollection">
            {mountainTriangles}
        </div>
    )
}

export default MountainCollection;