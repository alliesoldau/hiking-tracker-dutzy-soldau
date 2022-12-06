import React, { useState } from 'react';
import PieChartCollection from './PieChartCollection';
import HikeDetails from './HikeDetails';
import MountainCollection from './MountainCollection';

function GraphicalRepresenation({ userData }) {

    const [highlightedChallenge, setHighlightedChallenge] = useState([])

    return(
        <div className="GraphicalRepresentation">
            <PieChartCollection 
                userData={userData}
                setHighlightedChallenge={setHighlightedChallenge}
            />
            <HikeDetails />
            <MountainCollection 
                highlightedChallenge={highlightedChallenge}
            />
        </div>
    )
}

export default GraphicalRepresenation;