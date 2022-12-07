import React from "react";
import GraphicalRepresenation from "./GraphicalRepresentation";
import DataContainer from "./DataContainer";

function Home({ userData, rawData, challengesURL, userDataURL }) {
    return(
        <div className="Body-Container">
            <GraphicalRepresenation
                userData={userData} 
            />
            <DataContainer 
              rawData={rawData}
              challengesURL={challengesURL}
              userDataURL={userDataURL}
            />
        </div>
    )
}

export default Home;