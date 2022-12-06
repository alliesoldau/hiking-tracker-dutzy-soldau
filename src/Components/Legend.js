import React from 'react'

function Legend() {
    return(
        <div className="pie-chart-legend">
            <div className="legend-assignments">
                <div className="color-block-container-completed">
                    <div className="completed-hikes"></div>
                </div>
                <p>Completed Hikes</p>
            </div>
            <div className="legend-assignments">
                <div className="color-block-container-remaining">
                    <div className="remaining-hikes"></div>
                </div>
                <p>Remaining Hikes</p>
            </div>
            
        </div>
    )
}

export default Legend;