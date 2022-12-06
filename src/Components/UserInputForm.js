import React from 'react';
function UserInputForm({rawData, formData, setFormData}) {
 
 function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]: value,})
    } 


    return(
        <div className="UserInputForm">
            <form>
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
            </form>
        </div>
    )
}
export default UserInputForm;