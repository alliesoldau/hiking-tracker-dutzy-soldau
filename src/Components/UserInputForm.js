import React from 'react';

function UserInputForm() {
    return(
        <div className="UserInputForm">
            <form>
                <p>User Input Form</p>
                <div>
                     <button type='submit'>Submit Form</button>
                </div><br/>
                <div className="UserInputDropDowns-Container">
                    <div className="Date-Container">
                        <label>Date: </label><br/><br/>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div className="Buddies-Container">
                        <label>Buddies: </label>
                        <input type="text" id="buddies"  name="buddies" />
                    </div>
                    <div className="Notes-Container">
                        <label>Notes: </label>
                        <input type="text" id="notes"  name="notes" />
                    </div>
                    <div className="Pics-Container">
                        <label>Upload Your Photos: </label><br/>
                        <input type="file" id="photos" name="photos"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserInputForm;