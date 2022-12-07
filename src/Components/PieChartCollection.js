import React, { useEffect, useState } from 'react';
import PieChartCard from './PieChartCard'
import Legend from './Legend'


function PieChartCollection({ userData, setHighlightedChallenge }) {

    const [ADK46completedHikes, setADK46completedHikes] = useState([])
    const [CS3500completedHikes, setCS3500completedHikes] = useState([])
    const [LG12completedHikes, setLG12completedHikes] = useState([])
    const [LP9completedHikes, setLP9completedHikes] = useState([])
    const [SL6completedHikes, setSL6completedHikes] = useState([])

    // TO DO: Map through the mountain arrays and make the mountains appear
    // according to their correct size

    function passUpChallenge(name) {
        if (name === "ADK46") {
            setHighlightedChallenge(ADK46completedHikes)
        } else if (name === "Catskill 3500") {
            setHighlightedChallenge(CS3500completedHikes)
        } else if (name === "Lake George 12ster") {
            setHighlightedChallenge(LG12completedHikes)
        } else if (name === "Lake Placid 9") {
            setHighlightedChallenge(LP9completedHikes)
        } else if (name === "Saranc 6") {
            setHighlightedChallenge(SL6completedHikes)
        }
    }

    // TO DO: Prohibit a user from inputting a mountain more than once

    useEffect(() => {
        const ADK46value = userData
            .filter((hike) => hike.challengeName === "ADK46")
            setADK46completedHikes(ADK46value)
        const CS3500value = userData
            .filter((hike) => hike.challengeName === "Catskill 3500")
            setCS3500completedHikes(CS3500value)
        const LG12value = userData
            .filter((hike) => hike.challengeName === "Lake George 12ster")
            setLG12completedHikes(LG12value)
        const LP9value = userData
            .filter((hike) => hike.challengeName === "Lake Placid 9")
            setLP9completedHikes(LP9value)
        const SL6value = userData
            .filter((hike) => hike.challengeName === "Saranac 6")
            setSL6completedHikes(SL6value)
    }, [userData])
    
    const completedHikesObject = [
            {
                id: 1,
                completed: ADK46completedHikes.length,
                name: "ADK46",
                total: 46
            },
            {
                id: 2,
                completed: CS3500completedHikes.length,
                name: "Catskill 3500",
                total: 37
            },
            {
                id: 3,
                completed: LG12completedHikes.length,
                name: "Lake George 12ster",
                total: 12
            },
            {
                id: 4,
                completed: LP9completedHikes.length,
                name: "Lake Placid 9",
                total: 9
            },
            {
                id: 5,
                completed: SL6completedHikes.length,
                name: "Saranac 6",
                total: 9
            }
        ]

    const pieChartCollection = completedHikesObject.map((challenge) => {
        if (challenge.completed !== 0) {
            return(
                <PieChartCard 
                    key={challenge.id}
                    challenge={challenge}
                    passUpChallenge={passUpChallenge}
                />
            )
        }
    })

    return(
        <div className="PieChartCollection">
            <h3>Active Challenges</h3>
            <div className="Graphs-Container">
                {pieChartCollection}
            </div>
            <Legend />
        </div>
    )
}

export default PieChartCollection;