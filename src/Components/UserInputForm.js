import React from 'react';

function UserInputForm() {
    return(
        <div className="UserInputForm">
            <form>
                <p>User Input Form</p>
                <div className="UserInputDropDowns-Container">
                    <div className="Date-Container">
                        <label for="date" >Date: </label><br/><br/>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div className="Buddies-Container">
                        <p>Buddies</p>
                    </div>
                    <div className="Notes-Container">
                        <p>Notes</p>
                    </div>
                    <div className="Pics-Container">
                        <label for="myfile">Upload Your Photos: </label><br/>
                        <input type="file" id="photos" name="photos"/>
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