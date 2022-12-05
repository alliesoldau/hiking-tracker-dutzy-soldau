import React, { useState } from 'react';
import ChallengeSelector from './ChallengeSelector'
import UserInputForm from './UserInputForm'

function DataContainer({ rawData }) {

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

    return(
        <div className="Data-Container">
            <ChallengeSelector
                rawData={rawData}
                mountainsArray={mountainsArray}
                setMountainsArray={setMountainsArray}
                setName={setName}
                setElevation={setElevation}
                setAscent={setAscent}
                setLength={setLength}
                setTypicalTime={setTypicalTime}
                setDifficulty={setDifficulty}
                indexArray={indexArray}
            />
            <div className="hikeDetails">
                <p>Elevation: {elevation}</p>
                <p>Ascent: {ascent}</p>
                <p>Length: {length}</p>
                <p>Time: {typicalTime}</p>
                <p>Difficulty: {difficulty}</p>
            </div>  
            <UserInputForm 
                rawData={rawData}
                // TO DO KEVIN: Add in the props needed from UserInputFor
            />
      
        </div>
    )
}

export default DataContainer