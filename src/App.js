import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import DataContainer from './Components/DataContainer'
import GraphicalRepresentation from './Components/GraphicalRepresentation'

// HOW TO START PORTS:  json-server --watch ./data/index.js --port 3000
// how to site: https://github.com/huychau/json-server-multiple-files/tree/master/fakeapis

function App() {

  const baseURL = "http://localhost:6001/"
  const challengesURL = baseURL + "challenges"
  const userDataURL = baseURL + "userData"

  // IMPORTANT TO DO: How to ensure the URL is the same every time?

  const [rawData, setRawData] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch(challengesURL)
    .then((response) => response.json())
    .then((data) => {
      setRawData(data)
    })
  }, [])

  // console.table(rawData)

  useEffect(() => {
    fetch(userDataURL)
    .then((response) => response.json())
    .then((data) => {
      setUserData(data)
    })
  }, [])


  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <div className="Body-Container">
          <GraphicalRepresentation
            userData={userData} 
          />
            <DataContainer 
              rawData={rawData}
              challengesURL={challengesURL}
              userDataURL={userDataURL}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
