import React, { useState, useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom'

// TO DO: allow a patch from editing the form

function EditHike({ userDataURL }) {

    const { id } = useParams()
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
        }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Hike Details: </h2>
                <p>Challenge:  {hikeDetails.challengeName}</p>
                <p>Mountain: {hikeDetails.name}</p>
                <p>Elevation: {hikeDetails.elevation} ft</p>
                <p>Ascent: {hikeDetails.ascent} ft</p>
                <p>Length: {hikeDetails.length} mi</p>
                <p>Typical Time: {hikeDetails.typicalTime} hours</p>
                <p>Difficulty: {hikeDetails.difficulty}/7</p>
                <label>Date: </label>
                <input 
                    value={hikeDetails.date}
                    onChange={handleChange}
                    type="date" 
                    className="date" 
                    name="date" 
                />
                <label>Buddies: </label>
                <input 
                    type="text"
                    name="buddies"
                    value={hikeDetails.buddies}
                    onChange={handleChange}
                />
                <label>Notes: </label>
                    <textarea 
                        value={hikeDetails.notes}
                        onChange={handleChange}
                        placeholder='Tell us about your hike..' 
                        className="notes"  
                        name="notes" 
                        rows="4" cols="25">
                    </textarea>
                    <button type='submit' className="submit">Submit Edits</button>
            </form>
        </div>
    )
}

export default EditHike;