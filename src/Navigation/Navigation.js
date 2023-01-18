import React from 'react';
// import { Button } from 'react-bootstrap';
import './Navigation.css';


const Navigation = (props) => {

  const handleButtonClick = (event) => {
    props.getAlgorithmType(event.target.value);
  }

  return (     
    // This div contains the sorting visualizer title, 
    // home button & five buttons for sorting algorithms.
    <div className='pa3 bb bw2 dib' 
         style={{width: '100%',
                 background: 'linear-gradient(180deg, #DB302A 0%, #62186B 100%) no-repeat'}}>
      <div style={{display: 'flex', justifyContent: 'flex-start', color: '#D3D3D3'}}>
        <h1>Sorting Visualizer</h1>
      </div>

      {/*Home button & Other five algorithm buttons */}
      <div>
        <button onClick={handleButtonClick} value='Home' className='black b f3 pa2 ma2 br3 dim pointer shadow-3' style={{backgroundColor: '#ffc107'}}>Home</button>
        <button onClick={handleButtonClick} value='Bubble Sort' className='black b f3 pa2 ma2 br3 dim pointer shadow-3' style={{backgroundColor: '#ffc107'}}>Bubble Sort</button>
        <button onClick={handleButtonClick} value='Selection Sort' className='black b f3 pa2 ma2 br3 dim pointer shadow-3' style={{backgroundColor: '#ffc107'}}>Selection Sort</button>
        <button onClick={handleButtonClick} value='Insertion Sort' className='black b f3 pa2 ma2 br3 dim pointer shadow-3' style={{backgroundColor: '#ffc107'}}>Insertion Sort</button>
        <button onClick={handleButtonClick} value='Merge Sort' className='black b f3 pa2 ma2 br3 dim pointer shadow-3' style={{backgroundColor: '#ffc107'}}>Merge Sort</button>
        <button onClick={handleButtonClick} value='Quick Sort' className='black b f3 pa2 ma2 br3 dim pointer shadow-3' style={{backgroundColor: '#ffc107'}}>Quick Sort</button>
      </div>
    
    </div>
  );
}

export default Navigation;