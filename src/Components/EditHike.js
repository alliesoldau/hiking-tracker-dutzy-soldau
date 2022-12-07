import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'

function EditHike({ userDataURL }) {

    const { id } = useParams()
    let history = useHistory()
    
    const [hikeDetails, setHikeDetails] = useState({
        name: "",
        challengeName: "",
        elevation: 0,
        ascent: 0,
        length: 0,
        typicalTime: 0,
        difficulty: 0,
        date: "",
        buddies: "",
        notes: ""
    })

    useEffect(() => {
        fetch(`${userDataURL}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setHikeDetails(data)
        })
      }, [])

    function handleChange(e) {
    setHikeDetails({...hikeDetails, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("in here")
            fetch(`${userDataURL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            body: JSON.stringify(hikeDetails),
            })
            .then((r) => r.json())
            history.push("/")
        }



    return(
        <div className="EditHike">
            <div className="FormContainer">
                <form onSubmit={handleSubmit}>
                    <h2>Hike Details: </h2>
                    <p><b>Challenge:  </b>{hikeDetails.challengeName}</p>
                    <p><b>Mountain: </b>{hikeDetails.name}</p>
                    <p><b>Elevation: </b>{hikeDetails.elevation} ft</p>
                    <p><b>Ascent: </b>{hikeDetails.ascent} ft</p>
                    <p><b>Length: </b>{hikeDetails.length} mi</p>
                    <p><b>Typical Time: </b>{hikeDetails.typicalTime} hours</p>
                    <p><b>Difficulty: </b>{hikeDetails.difficulty}/7</p>
                    <div>
                        <label><b>Date: </b></label>
                        <input 
                            value={hikeDetails.date}
                            onChange={handleChange}
                            type="date" 
                            className="date" 
                            name="date" 
                        />
                    </div>
                    <div>
                        <label><b>Buddies: </b></label>
                        <input 
                            type="text"
                            name="buddies"
                            value={hikeDetails.buddies}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label><b>Notes: </b></label>
                        <textarea 
                            value={hikeDetails.notes}
                            onChange={handleChange}
                            placeholder='Tell us about your hike..' 
                            className="notes"  
                            name="notes" 
                            rows="2" cols="2">
                        </textarea>
                    </div>
                        <button type='submit' className="submit">Submit Edits</button>
                </form>
            </div>
        </div>
    )
}

export default EditHike;