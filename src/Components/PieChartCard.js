import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function PieChartCard({ challenge, passUpChallenge, backgroundChange }) {

    // TO DO: Show a percentage of completed hikes??
    // TO DO: When you complete all hikes, change pie chart to the patch
    function handlePieChartClick() {
        passUpChallenge(challenge.name)
    }

    return(
        <div className="PieChart" onClick={handlePieChartClick}>
            <h4 className={backgroundChange === challenge.name ? "background-1" : "background-2"}>{challenge.name}</h4>
            <PieChart className="pieChart"
                data={[
                    { title: challenge.completed, value: challenge.completed, color: '#283618'},
                    { title: challenge.total - challenge.completed, value: challenge.total, color: '#606C38' },
                ]}
                animate
                radius={50}
                animationDuration={500}
                animationEasing="ease-out"
                label={(data) => data.dataEntry.title}
                labelPosition={65}
                labelStyle={{
                    fontSize: ".75em",
                    fill: "white",
                    fontWeight: "bold",
                }}
            /> 
        </div>
    )
}

export default PieChartCard;