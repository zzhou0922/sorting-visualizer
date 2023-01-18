import {useState} from 'react';
import Home from './Home/Home'
import Navigation from './Navigation/Navigation'
import SortingSelectionPanel from './SortingSelectionPanel/SortingSelectionPanel'
import Footer from './Footer/Footer'
import './App.css';

const App = () => {

  // Get the algorithm from Navigation and pass it to the SortingSelectionPanel. 
  const[algorithmType, setAlgorithmType] = useState('Home');

  return (
    <div className="App">
      <Navigation getAlgorithmType={(e) => setAlgorithmType(e)}/>
      {algorithmType === "Home"? 
        <Home />
        :    
        <SortingSelectionPanel name={algorithmType}/>       
      }
      <Footer />
    </div>
  );
}

export default App;
