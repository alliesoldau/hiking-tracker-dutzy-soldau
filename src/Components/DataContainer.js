import React, { useState } from 'react';
import ChallengeSelector from './ChallengeSelector'
import UserInputForm from './UserInputForm'

function DataContainer({ rawData }) {

    const [mountainsArray, setMountainsArray] = useState([])
    // const [name, setName] = useState("")
    // const [elevation, setElevation] = useState(0)
    // const [ascent, setAscent] = useState(0)
    // const [length, setLength] = useState(0)
    // const [typicalTime, setTypicalTime] = useState(0)
    // const [difficulty, setDifficulty] = useState(0)

    const [mountainData, setMountainData] = useState({
        name: "",
        elevation: 0,
        ascent: 0,
        length: 0,
        typicalTime: 0,
        difficulty: 0
    })

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
                <p>Elevation: {mountainData.elevation}</p>
                <p>Ascent: {mountainData.ascent}</p>
                <p>Length: {mountainData.length}</p>
                <p>Time: {mountainData.typicalTime}</p>
                <p>Difficulty: {mountainData.difficulty}</p>
            </div>  
            <UserInputForm 
                rawData={rawData}
                // TO DO KEVIN: Add in the props needed from UserInputFor
            />
            <div>
                <button type='submit'>Submit Form</button>
            </div>
        </div>
    )
}

export default DataContainer