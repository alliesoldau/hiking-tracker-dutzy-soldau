import React, { useState } from 'react';
import ChallengesDD from './ChallengesDD';
import MountainsDD from './MountainsDD';

function ChallengeSelector({ rawData, setMountainsArray, mountainsArray, 
    mountainData, setMountainData, indexArray }) {

    const [challengeName, setChallengeName] = useState("")

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
        setChallengeName(e.target.value)
        const index = indexArray[`${e.target.value}`]
        // TO DO: get ride of selectedChallenge if I end up not needing it
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

    function handleMountainSelection(e) {
        e.preventDefault()
        const mountain = e.target.value
        const mountainInfo = mountainsArray.map((mount) => {
            if (mount.name === mountain) {
                setMountainData({
                    ...mountainData,
                    name: mount.name,
                    challengeName: challengeName,
                    elevation: mount.elevation,
                    ascent: mount.ascent,
                    length: mount.length,
                    typicalTime: mount.typicalTime,
                    difficulty: mount.difficulty,
                })
            }
        })
    }    

    return(
        <div className="ChallengeSelector">
            <div className="Selector-Container">
                <div className="Challenges-Container">
                    <label>Select a Challenge:</label>
                    <select
                        onChange={handleChallengeSelection}
                        placeholder='Select Challenge...' 
                        name='challenge' 
                        id='challenge'>
                            <option className="bootOption">🥾🥾</option>
                            {challengesDD}
                    </select>
                </div>
                <div className="Mountain-Container">
                    <label>Select a Mountain:</label>
                    <select 
                        onChange={handleMountainSelection}
                        placeholder='Select Mountain...' 
                        name='mountain' 
                        id='mountain'>
                            <option className="bootOption">⛰️</option>
                            {mountainsDD}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ChallengeSelector;