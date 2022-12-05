import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';



function PieChartCard() {

    // TO DO: Recieve the user data from piechartcollection
    // use this data to fill in the values of the pie chart
    // pie chart source: https://medium.com/@tgknapp11/render-a-chart-with-react-minimal-pie-chart-e30420c9276c


    return(
        <div className="PieChart">
            <PieChart className="pieChart"
                data={[
                    { title: 'Complete', value: 10, color: '#283618'},
                    { title: 'To Do', value: 15, color: '#606C38' },
                ]}
                animate
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