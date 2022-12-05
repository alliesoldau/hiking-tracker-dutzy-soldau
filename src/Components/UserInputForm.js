import React from 'react';
function UserInputForm() {
    return(
        <div className="UserInputForm">
            <form>
                <span>User Input Form</span>
                <div className="UserInputDropDowns-Container">
                    <div className="Date-Container">
                        <label>Date: </label><br/>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div className="Buddies-Container">
                        <label>Buddies: </label><br/>
                        <input placeholder='Who did you hike with?..'  type="text" id="buddies"  name="buddies" />
                    </div>
                    <div className="Notes-Container">
                        <label>Notes: </label><br/>
                        <textarea placeholder='Tell us about your hike..' id="notes"  name="notes" rows="4" cols="55">
                        </textarea>
                    </div>
                    <div className="Pics-Container">
                        <label>Upload A Photo: </label><br/>
                        <input type="file" id="photo" name="photo"/>
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