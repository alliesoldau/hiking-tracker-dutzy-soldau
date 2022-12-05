import React, { } from 'react';
import ChallengesDD from './ChallengesDD';

function ChallengeSelector({ rawData }) {

    const challengesDD = rawData.map((challenge) => {
        return(
            <ChallengesDD 
                key={challenge.id}
                challenge={challenge}
            />
        )
    })

    function handleChallengeSelection(e) {
        e.preventDefault()
        console.log(e.target.value)
    }

    return(
        <div className="ChallengeSelector">
            <p>Challenge Selector</p>
            <div className="Selector-Container">
                <div className="Challenges-Container">
                    <label>Select a Challenge:</label><br/>
                    <select onChange={handleChallengeSelection}
                        placeholder='Select Challenge...' 
                        name='challenge' 
                        id='challenge'>
                            {challengesDD}
                    </select>
                </div>
                <div className="Mountain-Container">
                    <label>Select a Mountain:</label><br/>
                    <select  placeholder='Select Mountain...' name='mountain' id='mountain'>
                        {/* {mountainNames} */}
                        {/* we should add a new component to map through the mountains to create option tags -
                        instead of individually creating 70+ option tags for this  */}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default ChallengeSelector;