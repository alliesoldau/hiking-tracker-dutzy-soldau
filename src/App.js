import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header'
import Home from "./Components/Home"
import About from "./Components/About"
import EditHike from './Components/EditHike';

// HOW TO START PORTS:  json-server --watch ./data/index.js --port 3000
// how to site: https://github.com/huychau/json-server-multiple-files/tree/master/fakeapis

function App() {

  const baseURL = "http://localhost:6001/"
  const challengesURL = baseURL + "challenges"
  const userDataURL = baseURL + "userData"

  const [rawData, setRawData] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch(challengesURL)
    .then((response) => response.json())
    .then((data) => {
      setRawData(data)
    })
  }, [])

  useEffect(() => {
    fetch(userDataURL)
    .then((response) => response.json())
    .then((data) => {
      setUserData(data)
    })
  }, [])

  function passUpCompletedHike(completedHike) {
    console.log(completedHike)
    setUserData([...userData, completedHike])
  }


  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Switch >
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home 
              userData={userData}
              rawData={rawData}
              challengesURL={challengesURL}
              userDataURL={userDataURL}
              passUpCompletedHike={passUpCompletedHike}
            />
          </Route>
          <Route path="/mountain/:id/edit">
            <EditHike 
              userDataURL={userDataURL}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
