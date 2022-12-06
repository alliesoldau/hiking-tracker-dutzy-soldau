import React from 'react';
import PieChartCollection from './PieChartCollection';
import HikeDetails from './HikeDetails';
import MountainCollection from './MountainCollection';

function GraphicalRepresenation({ userData }) {

    console.table(userData)

    return(
        <div className="GraphicalRepresentation">
            <PieChartCollection />
            <HikeDetails />
            <MountainCollection />
        </div>
    )
}

export default GraphicalRepresenation;