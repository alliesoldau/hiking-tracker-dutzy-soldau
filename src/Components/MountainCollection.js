import React, { useState } from 'react';
import Mountain from './Mountain'

function MountainCollection({ highlightedChallenge }) {

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