import React, { useState } from 'react';
import ChallengesDD from './ChallengesDD';
import MountainsDD from './MountainsDD';

function ChallengeSelector({ rawData }) {

    // TO DO: get ride of selectedChallenge if I end up not needing it
    const [selectedChallenge, setSelectedChallenge] = useState("")
    const [mountainsArray, setMountainsArray] = useState([])
    const [name, setName] = useState("")
    const [elevation, setElevation] = useState(0)
    const [ascent, setAscent] = useState(0)
    const [length, setLength] = useState(0)
    const [typicalTime, setTypicalTime] = useState(0)
    const [difficulty, setDifficulty] = useState(0)

    // TO DO: Find a way to not hard code the array indexes or get them more systematically
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
    console.log(`name: ${name}`)            
    console.log(`elevation: ${elevation}`)
    console.log(`ascent: ${ascent}`)
    console.log(`length: ${length}`)
    console.log(`typicalTime: ${typicalTime}`)
    console.log(`difficulty: ${difficulty}`)

    

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
                    <p>Elevation: </p>
                    <p>Ascent: </p>
                    <p>Length: </p>
                    <p>Time: </p>
                    <p>Difficulty: </p>
                </div>
            </div>
        </div>
        
    )
}
export default ChallengeSelector;