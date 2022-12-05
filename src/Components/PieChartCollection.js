import React from 'react';
import PieChartCard from './PieChartCard'


function PieChartCollection() {

    // TO DO: Pull the user data from the user data database
    // map through the data and create a piechartcard for each object
    // pie chart info: https://www.npmjs.com/package/react-minimal-pie-chart

    return(
        <div className="PieChartCollection">
            <p>PieChartCollection</p>
            <div className="Graphs-Container">
                <PieChartCard />
                <PieChartCard />
            </div>
        </div>
    )
}

export default PieChartCollection;