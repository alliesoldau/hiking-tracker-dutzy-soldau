import './App.css';
import Header from './Components/Header'
import ChallengeSelector from './Components/ChallengeSelector'
import UserInputForm from './Components/UserInputForm'
import GraphicalRepresentation from './Components/GraphicalRepresentation'

// https://github.com/huychau/json-server-multiple-files
// --> reference for having multiple .json files

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <div className="Body-Container">
          <GraphicalRepresentation />
          <div className="Data-Container">
            <ChallengeSelector />
            <UserInputForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
