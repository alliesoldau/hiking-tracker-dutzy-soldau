import React, { useState } from 'react';
import ChallengesDD from './ChallengesDD';
import MountainsDD from './MountainsDD';

function DataContainer({ rawData, userDataURL, passUpCompletedHike }) {

    const [mountainsArray, setMountainsArray] = useState([])
    const [mountainData, setMountainData] = useState({
        name: "⛰️",
        challengeName: "",
        elevation: 0,
        ascent: 0,
        length: 0,
        typicalTime: 0,
        difficulty: 0
    })
    const [formData, setFormData] = useState({
        date: "",
        buddies: "",
        notes: "",
    })

    const indexArray = {
        "ADK46": 0,
        "Catskill 3500": 1,
        "Lake George 12ster": 2,
        "Lake Placid 9": 3,
        "Saranac 6": 4
    }

    function handleSubmit(e) {
        e.preventDefault();
        const completedHike = {...mountainData, ...formData}
        fetch(userDataURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(completedHike)
        })
        .then((response) => response.json())
        .then((data) => passUpCompletedHike(data))
        setMountainData({
            name: "⛰️",
            challengeName: "",
            elevation: 0,
            ascent: 0,
            length: 0,
            typicalTime: 0,
            difficulty: 0
        })
        setFormData({
            date: "",
            buddies: "",
            notes: "",
        })
        e.target.reset()
    }

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

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]: value,})
    } 

    // TO DO: Make it so you can't submit with the emojis as the selected challenge

    return(
        <form onSubmit={handleSubmit}>
            <div className="Data-Container">
                <div className="ChallengeSelector">
                    <div className="Selector-Container">
                        <div className="Challenges-Container">
                            <label>Select a Challenge:</label>
                            <select
                                onChange={handleChallengeSelection}
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
                            id='mountain' 
                            value={mountainData.name}
                            >
                                
                                <option className="bootOption">⛰️</option>
                                {mountainsDD}
                        </select>
                    </div>
                </div>
            </div>
                <div className="hikeDetails">
                    <p><b>Elevation:</b> {mountainData.elevation} ft</p>
                    <p><b>Ascent:</b> {mountainData.ascent} ft</p>
                    <p><b>Length:</b> {mountainData.length} mi</p>
                    <p><b>Time:</b> {mountainData.typicalTime} hours</p>
                    <p><b>Difficulty:</b> {mountainData.difficulty}/7</p>
                </div>  
                <div className="UserInputForm">
                    <div className="UserInputDropDowns-Container">
                        <div className="Date-Container">
                            <label>Date: </label>
                            <input 
                                value={formData.date}
                                onChange={handleChange}
                                type="date" 
                                className="date" 
                                name="date" />
                        </div>
                        <div className="Buddies-Container">
                            <label>Buddies: </label>
                            <input 
                                value={formData.buddies}
                                onChange={handleChange}
                                placeholder='Who did you hike with?..'  
                                type="text" 
                                className="buddies"  
                                name="buddies" />
                        </div>
                        <div className="Notes-Container">
                            <label>Notes: </label>
                            <textarea 
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder='Tell us about your hike..' 
                                className="notes"  
                                name="notes" 
                                rows="4" cols="55">
                            </textarea>
                        </div>
                        {/* <div className="Pics-Container">
                            <label>Upload A Photo: </label>
                            <input 
                            onChange={handleChange}
                                type="file" 
                                className="image" 
                                name="image"/>
                        </div> */}
                    </div>
                </div>
                <div className="submit">
                    <button type='submit' className="submit">Submit Form</button>
                </div>
            </div>
                
        </form>
    )
}

export default DataContainer