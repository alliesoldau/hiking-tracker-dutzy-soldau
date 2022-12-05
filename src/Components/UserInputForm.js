import React, { useState } from 'react';
function UserInputForm() {

    const [formData, setFormData] = useState({
        challenge: "",
        mountain: "",
        date: "",
        buddies: [""],
        notes: "",
        image: "",

    // function handleChange(e) {
    //     const name = e.target.name
    //     const value = e.target.value
    //     
    //     setFormData({...formData, [name]: value,})
    // } 

 })

    return(
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
    )
}
export default UserInputForm;