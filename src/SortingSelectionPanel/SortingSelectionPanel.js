import React, { useState, useEffect } from "react";
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import './SortingSelectionPanel.css';


// SortingSelectionPanel is the data size and the delay selection for the user.
const SortingSelectionPanel = (props) => {

	// dataSize and delay are states that will get passed to the sorting visualizer.
	// dataSize is the size of the array for sorting, it is customized by the user.
	// delay is the delay gap for sorting animation, it is also customized by the user. 
  const [dataSize, setDataSize] = useState(5);
  const [delay, setDelay] = useState(5);
  

  // The data size indicator will get updated when slider of data size is moving
  useEffect(() => {
    const rangeSlider = document.getElementById("data-size-range-line");
    const rangeBullet = document.getElementById("data-size-bullet");

    rangeSlider.addEventListener("input", showDataSizeValue, false);

    function showDataSizeValue() {
      rangeBullet.innerHTML = rangeSlider.value;
      const bulletPosition = rangeSlider.value / rangeSlider.max;
      rangeBullet.style.left = bulletPosition * 220 + "px";
      setDataSize(rangeSlider.value);
   }
  }, []);


  // The delay indicator will get updated when slider of delay is moving
  useEffect(() => {
    const rangeSlider = document.getElementById("delay-range-line");
    const rangeBullet = document.getElementById("delay-bullet");

    rangeSlider.addEventListener("input", showDelayValue, false);

    function showDelayValue() {
      rangeBullet.innerHTML = rangeSlider.value;
      const bulletPosition = rangeSlider.value / rangeSlider.max;
      rangeBullet.style.left = bulletPosition * 220 + "px";
      setDelay(rangeSlider.value);
   }
  }, []);


  return (
  	<div style={{background: 'rgba(0, 128, 128, 1.0)'}}>
		{/*This div contains the background style of data size & speed slider bars, generate and run algorithm buttons*/}
	  	<div style={{background: 'linear-gradient(to bottom, #62186B 0%, rgba(0, 128, 128, 1.0) 100%)'}}>

			{/*This div make data size & speed slider bars in inline-block display*/}  		
		  	<div className="dib">
		  		{/*{Below is data size slider bar}*/}
			    <div className="container dib pt3 pl3 mv3 mh4 shadow-4" 
			    		 style={{background: 'linear-gradient(10deg, #AEAEAD 0%, #FFFFFF 100%) no-repeat'}}>
			      <span className="b f3 mt3 ba ph2 pb1 shadow-1" style={{color: '#292929', borderRadius: '10px'}}>Data Size</span>
			      <div className="range-slider">
			        <span id="data-size-bullet" className="rs-label shadow-1">{dataSize}</span>
			        <input
			          id="data-size-range-line"
			          className="rs-range"
			          type="range"
			          value={dataSize}
			          min="0"
			          max="100"
			          onInput={(e) => setDataSize(e.target.value)}
			        />
			      </div>
			      <div className="box-minmax">
			        <span>0</span>
			        <span>100</span>
			      </div>
			    </div>

				{/*{Below is delay slider bar}*/}
			    <div className="container dib pt3 pl3 mv3 mh4 shadow-4" style={{background: 'linear-gradient(10deg, #AEAEAD 0%, #FFFFFF 100%) no-repeat'}}>
			      <span className="b f3 mt3 ba ph2 pb1 shadow-1" style={{color: '#292929', borderRadius: '10px'}}>Delay(ms)</span>
			      <div className="range-slider">
			        <span id="delay-bullet" className="rs-label shadow-1">{delay}</span>
			        <input
			          id="delay-range-line" 
			          className="rs-range"
			          type="range"
			          value={delay}
			          min="0"
			          max="100"
			          onInput={(e) => setDelay(e.target.value)}
			        />
			      </div>
			      <div className="box-minmax">
			        <span>0</span>
			        <span>100</span>
			      </div>
			    </div>
			</div>

		</div>
		<div style={{background: 'linear-gradient(to bottom, rgba(0, 128, 128, 1.0) 0%, #D1B600 100%)'}}>
		<SortingVisualizer dataSize={dataSize} delay={delay} name={props.name}/>
		</div>
	</div>
  );
}

export default SortingSelectionPanel;






















// import React, { useState, useEffect } from 'react';
// import './SortingSelectionPanel.css';

// const SortingSelectionPanel = () => {
// 	const [value, setValue] = useState(5);

// 	const handleSliderInput = (e) => {
//   		setValue(e.target.value);
// 		const sliderValueContainer = document.querySelector('.slider-value-container');
// 		const sliderWidth = document.querySelector('.slider input[type="range"]').offsetWidth;
// 		if(e.target.value < 10) {
// 			sliderValueContainer.style.left = `${e.target.value * 3.35}px`;
// 			// console.log(`${e.target.value / 100 * sliderWidth}px`);
// 		} else if (e.target.value >=10 && e.target.value <= 99) {
// 			// sliderValueContainer.style.left = `${e.target.value / 100 * sliderWidth - 6}px`;
// 			sliderValueContainer.style.left = `${e.target.value * 3.35}px`;
// 		}
		
// 	};

// 	return(
// 		<div className="dib mt5">
// 			<div className="slider dib pa2 mh4 relative">
// 				<p>Data Size</p>
// 				<div className="slider-value-container">
// 					<span className="db">{value}</span>
// 				</div>
// 		    	<input type="range" min="0" max="100" value={value} onInput={handleSliderInput} />
// 		       	<br />
// 		       	<span className="pr7">0</span><span className="pl5">100</span>
// 	    	</div>
// 	    	<div className="slider dib pa2 mh4">
// 	    		<p>Speed</p>
// 		    	<input className="dib" type="range" min="5" max="100" value={value} onInput={(e) => {
// 		        	setValue(e.target.value);
// 		       	}} />
// 		    	<p id="rangeValue">{value}</p>
// 	    	</div>
//     	</div>
// 	);
// }

// export default SortingSelectionPanel;



