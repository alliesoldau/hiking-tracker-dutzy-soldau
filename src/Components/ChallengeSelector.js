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

    const [formData, setFormData] = useState({
        challenge: "",
        mountain: "",
        date: "",
        buddies: [""],
        notes: "",
        image: "",
    })

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
        <div className="Data-Container">
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
                <div>
                    <p>Elevation: {elevation}</p>
                    <p>Ascent: {ascent}</p>
                    <p>Length: {length}</p>
                    <p>Time: {typicalTime}</p>
                    <p>Difficulty: {difficulty}</p>
                </div>
            </div>
        </div>
        <div className="UserInputForm">
        <form>
            <span>User Input Form</span>
            <div className="UserInputDropDowns-Container">
                <div className="Date-Container">
                    <label>Date: </label><br/>
                    <input 
                        /*onChange={handleChange}*/
                        type="date" 
                        id="date" 
                        name="date" />
                </div>
                <div className="Buddies-Container">
                    <label>Buddies: </label><br/>
                    <input 
                        /*onChange={handleChange}*/
                        placeholder='Who did you hike with?..'  
                        type="text" 
                        id="buddies"  
                        name="buddies" />
                </div>
                <div className="Notes-Container">
                    <label>Notes: </label><br/>
                    <textarea 
                        /*onChange={handleChange}*/
                        placeholder='Tell us about your hike..' 
                        id="notes"  
                        name="notes" 
                        rows="4" cols="55">
                    </textarea>
                </div>
                <div className="Pics-Container">
                    <label>Upload A Photo: </label><br/>
                    <input 
                        /*onChange={handleChange}*/
                        type="file" 
                        id="image" 
                        name="image"/>
                </div>
                <div>
                 <button type='submit'>Submit Form</button>
                </div>
            </div>
        </form>
    </div>
    </div>
    )
}
export default ChallengeSelector;