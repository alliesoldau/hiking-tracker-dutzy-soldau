import React, { useState } from 'react';
import ChallengesDD from './ChallengesDD';
import MountainsDD from './MountainsDD';

function ChallengeSelector({ rawData, setSelectedChallenge, setMountainsArray, mountainsArray, setName, setElevation, setAscent, setLength, setTypicalTime, setDifficulty, indexArray }) {

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

    function handleMountainSelection(e) {
        e.preventDefault()
        const mountain = e.target.value
        const mountainInfo = mountainsArray.map((mount) => {
            if (mount.name === mountain) {
                setName(mount.name)
                setElevation(mount.elevation)
                setAscent(mount.ascent)
                setLength(mount.length)
                setTypicalTime(mount.typicalTime)
                setDifficulty(mount.difficulty)
            }
        })
    }    
    
    return(
        <div className="ChallengeSelector">
            <p>Challenge Selector</p>
            <div className="Selector-Container">
                <div className="Challenges-Container">
                    <label>Select a Challenge:</label><br/>
                    <select 
                        onChange={handleChallengeSelection}
                        placeholder='Select Challenge...' 
                        name='challenge' 
                        id='challenge'>
                            {challengesDD}
                    </select>
                </div>
                <div className="Mountain-Container">
                    <label>Select a Mountain:</label><br/>
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