import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import DataContainer from './Components/DataContainer'
import GraphicalRepresentation from './Components/GraphicalRepresentation'

// HOW TO START PORTS:  json-server --watch ./data/index.js --port 3000

function App() {

  // IMPORTANT TO DO: How to ensure the URL is the same every time?
  const baseChallengesURL = "http://localhost:3000/SourceData"
  const baseUserDataURL = "http://localhost:3000/UserData"

  const [rawData, setRawData] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch(baseChallengesURL)
    .then((response) => response.json())
    .then((data) => setRawData(data.challenges))
    console.log(rawData)
  }, [])

  // IMPORTANT TO DO: I think we need to specify which port this
  // is gonna run through so that the fetch request works more consistently? 
  useEffect(() => {
    fetch(baseUserDataURL)
    .then((response) => response.json())
    .then((data) => setUserData(data))
  }, [])

  console.log(userData)

  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <div className="Body-Container">
          <GraphicalRepresentation />
            <DataContainer 
              rawData={rawData}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
