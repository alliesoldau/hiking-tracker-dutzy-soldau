import React from 'react';
import PieChartCollection from './PieChartCollection';
import HikeDetails from './HikeDetails';
import MountainCollection from './MountainCollection';

function GraphicalRepresenation() {
    return(
        <div>
            <p>Graphical Representation</p>
            <PieChartCollection />
            <HikeDetails />
            <MountainCollection />
        </div>
    )
}

export default GraphicalRepresenation;