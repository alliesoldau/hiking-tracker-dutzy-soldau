import React, { useState } from 'react';
import ChallengesDD from './ChallengesDD';
import MountainsDD from './MountainsDD';

function ChallengeSelector({ rawData }) {

    const [selectedChallenge, setSelectedChallenge] = useState("")
    const [mountainsArray, setMountainsArray] = useState([])

    // TO DO: Find a way to not hard code this
    const indexArray = {
        "ADK46": 0,
        "Catskill 3500": 1,
        "Lake George 12ster": 2,
        "Lake Placid 9": 3,
        "Saranac 6": 4
    }

    const challengesDD = rawData.map((challenge) => {
        return(
            <ChallengesDD 
                key={challenge.id}
                challenge={challenge}
            />
        )
    })

    function handleChallengeSelection(e) {
        e.preventDefault()
        const index = indexArray[`${e.target.value}`]
        setSelectedChallenge(e.target.value)
        setMountainsArray(rawData[index].mountains)
    }

    const mountainsDD = mountainsArray.map((mountain) => {
        return(
            <MountainsDD
                key={mountain.name}
                mountain={mountain}
            />
        )
    })



    return(
        <div className="ChallengeSelector">
            <p>Challenge Selector</p>
            <div className="Selector-Container">
                <div className="Challenges-Container">
                    <label>Select a Challenge:</label><br/>
                    <select onChange={handleChallengeSelection}
                        placeholder='Select Challenge...' 
                        name='challenge' 
                        id='challenge'>
                            {challengesDD}
                    </select>
                </div>
                <div className="Mountain-Container">
                    <label>Select a Mountain:</label><br/>
                    <select  placeholder='Select Mountain...' name='mountain' id='mountain'>
                        {mountainsDD}
                        {/* we should add a new component to map through the mountains to create option tags -
                        instead of individually creating 70+ option tags for this  */}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default ChallengeSelector;