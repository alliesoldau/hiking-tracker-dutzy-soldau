import React from 'react';
import PieChart from './PieChart'

function PieChartCollection() {
    return(
        <div className="PieChartCollection">
            <p>PieChartCollection</p>
            <div className="Graphs-Container">
                <PieChart />
                <PieChart />
            </div>
        </div>
    )
}

export default PieChartCollection;