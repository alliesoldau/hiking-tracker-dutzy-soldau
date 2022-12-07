import React, { useState } from 'react';
import PieChartCollection from './PieChartCollection';
import MountainCollection from './MountainCollection';

function GraphicalRepresenation({ userData }) {

    const [highlightedChallenge, setHighlightedChallenge] = useState([])

    console.log(highlightedChallenge)

    return(
        <div className="GraphicalRepresentation">
            <PieChartCollection 
                userData={userData}
                setHighlightedChallenge={setHighlightedChallenge}
            />
            <MountainCollection 
                highlightedChallenge={highlightedChallenge}
            />
        </div>
    )
}

export default GraphicalRepresenation;