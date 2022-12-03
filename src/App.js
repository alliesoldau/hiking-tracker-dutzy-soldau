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
      <Header />
      <ChallengeSelector className="ChallengeSelector" />
      <UserInputForm className="UserInputForm" />
      <GraphicalRepresentation className="GraphicalRepresentation" />
    </div>
  );
}

export default App;
