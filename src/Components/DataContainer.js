import React, { useState } from 'react';
import ChallengeSelector from './ChallengeSelector'
import UserInputForm from './UserInputForm'

function DataContainer({ rawData, challengesURL, userDataURL }) {

    const [mountainsArray, setMountainsArray] = useState([])
    const [mountainData, setMountainData] = useState({
        name: "",
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

    console.log(formData)

    // TO DO: Find a way to not hard code the array indexes or get them more systematically
    const indexArray = {
        "ADK46": 0,
        "Catskill 3500": 1,
        "Lake George 12ster": 2,
        "Lake Placid 9": 3,
        "Saranac 6": 4
    }

    // console.log(`userDataURL: ${userDataURL}`)

    function handleSubmit() {
        // const completedHike = {...mountainData, ...formData}
        // console.log(`completed hike: ${mountainData}`)
        fetch("http://localhost:6001/userData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    return(
        <div className="Data-Container">
            <ChallengeSelector
                rawData={rawData}
                mountainsArray={mountainsArray}
                setMountainsArray={setMountainsArray}
                mountainData={mountainData}
                setMountainData={setMountainData}
                indexArray={indexArray}
            />
            <div className="hikeDetails">
                <p><b>Elevation:</b> {mountainData.elevation}</p>
                <p><b>Ascent:</b> {mountainData.ascent}</p>
                <p><b>Length:</b> {mountainData.length}</p>
                <p><b>Time:</b> {mountainData.typicalTime}</p>
                <p><b>Difficulty:</b> {mountainData.difficulty}</p>
            </div>  
            <UserInputForm 
                formData={formData}
                setFormData={setFormData}
                rawData={rawData}
            />
            <div>
                <button onClick={handleSubmit} type='submit'>Submit Form</button>
            </div>
        </div>
    )
}

export default DataContainer