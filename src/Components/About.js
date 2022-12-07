import React from "react";
import mtnpng from '../images/mtnpng.png'

function About() {
    return(
        <div className="About">
            <h1>About the Hiking Tracker</h1>
            <div className="aboutDetailsContainer">
                <h2>What is it?</h2>
                    <p>Hiking challenges are a fun, community building part of the outdoor adventure world.
                        Hikers of all skill levels set out to gain patches by "peak bagging" all the summits within
                        a particular challenge. Sometimes this is a mountain range, sometimes its to see a particular
                        type of natural wonder, etc. The Hiking Tracker allows hikers to more easily keep track of which
                        mountains they have completed in their challenges in a simple and visual way.
                    </p>
                <h2>How do you use it?</h2>
                <p>After you complete a hike, first choose which challenge you want to work on it belongs to,
                    then select that hike from the drop down list, and finally input your particular information
                    from the hike you completed. This will then populate pie charts to show you your progress. If
                    you click on a pie chart it will render mountains at the bottom of the page associated with each hike.
                    Clicking on a mountain displays more information about the hike, and allows you to make edits if need be.
                </p>
            </div>
            <div className="image">
                <img src={mtnpng}></img>
            </div>
        </div>
    )
}

export default About;