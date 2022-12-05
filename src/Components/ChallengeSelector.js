import React, { useState } from 'react';
import ChallengesDD from './ChallengesDD';
import MountainsDD from './MountainsDD';

function ChallengeSelector({ rawData, setMountainsArray, mountainsArray, mountainData, setMountainData, indexArray }) {

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
                    elevation: mount.elevation,
                    ascent: mount.ascent,
                    length: mount.length,
                    typicalTime: mount.typicalTime,
                    difficulty: mount.difficulty,
                })
            }
        })
    }    

    // TO DO: Make it so the challenges populate with nothing on page load
    // and make it so you can click on the mountains without first having 
    // to click off of the first mountain that renders in the list

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
                            <option className="bootOption">🥾🥾⛰️</option>
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
                            {mountainsDD}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ChallengeSelector;