import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import DataContainer from './Components/DataContainer'
import GraphicalRepresentation from './Components/GraphicalRepresentation'

// https://github.com/huychau/json-server-multiple-files
// --> reference for having multiple .json files

function App() {

  const [rawData, setRawData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/challenges")
    .then((response) => response.json())
    .then((data) => setRawData(data))
  }, [])

  

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
