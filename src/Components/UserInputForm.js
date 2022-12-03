import React from 'react';

function UserInputForm() {
    return(
        <div className="UserInputForm">
            <p>User Input Form</p>
            <div className="UserInputDropDowns-Container">
                <div className="Date-Container">
                    <p>Date</p>
                </div>
                <div className="Buddies-Container">
                    <p>Buddies</p>
                </div>
                <div className="Notes-Container">
                    <p>Notes</p>
                </div>
                <div className="Pics-Container">
                    <p>Pics</p>
                </div>
            </div>
        </div>
    )
}

export default UserInputForm;