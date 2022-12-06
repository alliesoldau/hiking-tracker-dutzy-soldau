import React from 'react';
import Mountain from './Mountain'

function MountainCollection({ highlightedChallenge }) {

    // TO DO: Clearn highlighted challenge after a click so that the data doesn't stick around

    //to find the exageration factor loop thru the array to find the max
    // and min elevations. then, feed the difference of those number into the mountain card
    // and subtract it from all ur elevations to get an exagerated elevation effect
    
    const elevationsArray = highlightedChallenge.map((mtn) => {
        return(
            mtn.elevation
        )
    })

    // const maxElevation = Math.max(...elevationsArray)
    const minElevation = Math.min(...elevationsArray)
    // const exagerationFactor = (maxElevation - minElevation)

    // console.log(exagerationFactor)
    
    const mountainTriangles = highlightedChallenge.map((mtn) => {
        return(
            <Mountain
                key={mtn.name}
                mtn={mtn}
                minElevation={minElevation}
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