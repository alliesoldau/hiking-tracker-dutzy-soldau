import React from 'react';
import Mountain from './Mountain'

function MountainCollection({ highlightedChallenge }) {

    // TO DO: Clearn highlighted challenge after a click so that the data doesn't stick around

    console.log(highlightedChallenge)
    const mountainTriangles = highlightedChallenge.map((mtn) => {
        return(
            <Mountain
                key={mtn.name}
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

export default  MountainCollection;