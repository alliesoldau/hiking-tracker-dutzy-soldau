import React from 'react';
import PieChartCollection from './PieChartCollection';
import HikeDetails from './HikeDetails';
import MountainCollection from './MountainCollection';

function GraphicalRepresenation({ userData }) {

    return(
        <div className="GraphicalRepresentation">
            <PieChartCollection 
                userData={userData}
            />
            <HikeDetails />
            <MountainCollection />
        </div>
    )
}

export default GraphicalRepresenation;