import React from 'react';
function ChallengeSelector() {
    return(
        <div className="ChallengeSelector">
            <p>Challenge Selector</p>
            <div className="Selector-Container">
                <div className="Challenges-Container">
                    <label>Select a Challenge:</label><br/>
                    <select  placeholder='Select Challenge...' name='challenges' id='challenges'>
                        <option>ADK46</option>
                        <option>Catskill 3500</option>
                        <option>LG 12</option>
                        <option>LP 9</option>
                        <option>Saranac 6</option>
                    </select>
                </div>
                <div className="Mountain-Container">
                    <label>Select a Mountain:</label><br/>
                    <select  placeholder='Select Mountain...' name='mountains' id='mountains'>
                        <option></option>
                        {/* we should add a new component to map through the mountains to create option tags -
                        instead of individually creating 70+ option tags for this  */}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default ChallengeSelector;