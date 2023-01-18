import React, { useRef, useState, useEffect } from 'react';
import bubbleSort from '../Algorithms/bubbleSort/bubbleSort';
import selectionSort from '../Algorithms/selectionSort/selectionSort';
import insertionSort from '../Algorithms/insertionSort/insertionSort';
import getMergeSortSteps from '../Algorithms/mergeSort/getMergeSortSteps';
import mergeSortStepsRender from '../Algorithms/mergeSort/mergeSortStepsRender';
import getQuickSortSteps from '../Algorithms/quickSort/getQuickSortSteps';
import quickSortStepsRender from '../Algorithms/quickSort/quickSortStepsRender';

import BubbleSortColorNotation from '../Algorithms/bubbleSort/BubbleSortColorNotation';
import SelectionSortColorNotation from '../Algorithms/selectionSort/SelectionSortColorNotation';
import InsertionSortColorNotation from '../Algorithms/insertionSort/InsertionSortColorNotation';
import MergeSortColorNotation from '../Algorithms/mergeSort/MergeSortColorNotation';
import QuickSortColorNotation from '../Algorithms/quickSort/QuickSortColorNotation';

const SortingVisualizer = (props) => {

    // States for animation of sorting process. 
    const [numArray, setNumArray] = useState([]);
    const [colorArray, setColorArray] = useState([]); 

    // States for generate random data, run sorting algorithm and clear buttons 
    const [isDataGenerationDisabled, setDataGenerationDisable] = useState(false);
    const [isDataSortDisabled, setDataSortDisable] = useState(true);
    const [isDataClearDisabled, setDataClearDisable] = useState(true);
    const [visualizerDiv, setVisualizerDiv] = useState(false);

    // sortSteps state is an array to record the changing of the number array 
    // and the color array during the process in merge sort and quick sort that 
    // happened inside getMergeSortSteps and getQuickSortSteps. 
    const [sortSteps, setSortSteps] = useState([]);

    // For color notation purpose states.
    const [BSColorNotationDiv, setBSColorNotationDiv] = useState(false);
    const [SSColorNotationDiv, setSSColorNotationDiv] = useState(false);
    const [ISColorNotationDiv, setISColorNotationDiv] = useState(false);
    const [MSColorNotationDiv, setMSColorNotationDiv] = useState(false);
    const [QSColorNotationDiv, setQSColorNotationDiv] = useState(false);

    // For generate random data button reference/
    let generateBtn = useRef(null);

    // shouldStop is used to stop the merge sort or quick sort animation 
    // anytime the user click clear button. 
    let shouldStop = false;


    // generateRandomArrayClick function will generate a new random array 
    // by the specified size that the user chooses.  
    function generateRandomArrayClick() {
        setVisualizerDiv(true);
        const tempNumArr = [];
        const tempColorArr = [];
        for (let i = 0; i < props.dataSize; i++) {
            let numTemp = randomIntFromInterval(1, 100);
            tempNumArr.push(numTemp);
            tempColorArr.push('#FF8200');
        }
        setNumArray(tempNumArr);
        setColorArray(tempColorArr);
        // setDataGenerationDisable(true);
        setDataSortDisable(false);
        setDataClearDisable(false);
    }

    // Generate elements (random from 1 to 100) to the array for sorting.  
    const randomIntFromInterval = (min, max) => {
       // min and max included
       return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // clearData function will clear the current animation of sorting. 
    function clearData() {
        
        // -------------------------
        // This part is for merge sort and quick sort
        // I have to clear sortSteps in order to clear the view. 
        shouldStop = true;
        let i = sortSteps.length-1;
        while(i >= 0) {
            sortSteps.shift();
            i--;
        }
        // -------------------------
        
        // -------------------------
        // This part is for all sorts
        // Need to clear that in order to clear the view.
        i = numArray.length-1;
        while(i >= 0) {
            numArray.shift();
            colorArray.shift();
            i--;
        }  
        // -------------------------

        setSortSteps([]);
        setNumArray([]);
        setColorArray([]);
        setDataGenerationDisable(false);
        setDataSortDisable(true);
        setDataClearDisable(true);
        setVisualizerDiv(true); 
    }

    // handleSort function will a sort based on the user selection. 
    function handleSort() {
        generateBtn.current.disabled = true;
        if(props.name === "Bubble Sort") {
            // bubbleSort(numArray, colorArray, setNumArray, setColorArray, 1000);
            bubbleSort(numArray, colorArray, setNumArray, setColorArray, props.delay);    
        } else if(props.name === "Selection Sort") {
            // selectionSort(numArray, colorArray, setNumArray, setColorArray, 1000);
            selectionSort(numArray, colorArray, setNumArray, setColorArray, props.delay);
        } else if(props.name === "Insertion Sort") {
            // insertionSort(numArray, colorArray, setNumArray, setColorArray, 1000);
            insertionSort(numArray, colorArray, setNumArray, setColorArray, props.delay);
        } else if(props.name === "Merge Sort") {
            // const arr = [23, 14, 14, 6, 24];
            // const arr = [23, 14, 6, 24];

            // mergeRangeRecord variable is also used inside the getMergeSortSteps function.
            // During the split part of the merge sort, mergeRangeRecord will record the 
            // range for each iteration of splitting. 
            // And once it needs to be merged in merge sort, it can trace back to provide 
            // the index of the number array and the color array that we need to know where 
            // exactly need to update in these two arrays.
            const mergeRangeRecord = [];

            // indexArray variable is used to represent the number of array elements but in 
            // their index number. During the split part of the merge sort, how the number 
            // array gets divided in each iteration, is also how the index array gets divided, 
            // and each time the index array gets divided (except the single element in the array), 
            // it will be pushed in mergeRangeRecord variable, and the mergeRangeRecord provides 
            // the dynamic index change status that we can trace back.
            const indexArray = [];

            // Here is the way how indexArray to represent index of the number array. 
            numArray.forEach((element, index) => {
                indexArray.push(index);
            });
            
            // getMergeSortSteps gets called. The main purpose of this function is 
            // do the merge sort for the number array and give records to sortSteps variable.
            getMergeSortSteps(numArray, colorArray, indexArray, 
                                sortSteps, mergeRangeRecord);
            // Render records inside sortSteps to see how merge sort works in the view.
            // mergeSortStepsRender(sortSteps, setNumArray, setColorArray, 
            //                         shouldStop, 1000);
            mergeSortStepsRender(sortSteps, setNumArray, setColorArray, 
                                    shouldStop, props.delay); 
        } else if (props.name === 'Quick Sort') {
            // const arr = [23, 14, 14, 14, 1, 6, 24];

            // The usage of this variable is same as in the merge sort, 
            // for more details, please read the comment in merge sort 
            // for this particular variable.  
            const indexArray = [];

            // Here is the way how indexArray to represent index of the number array. 
            numArray.forEach((element, index) => {
                indexArray.push(index);
            });

            // The main purpose of this function is do the quick sort for the number 
            // array and give records to sortSteps variable.
            getQuickSortSteps(numArray, colorArray, indexArray, sortSteps);

            // Render records inside sortSteps to see how quick sort works in the view.
            // quickSortStepsRender(sortSteps, setNumArray, setColorArray, 
            //                         shouldStop, 1000); 
            quickSortStepsRender(sortSteps, setNumArray, setColorArray, 
                                    shouldStop, props.delay); 
        }
        setDataGenerationDisable(true);
        setDataSortDisable(true);
        setDataClearDisable(false);
    }

    // This effect is for the selected sorting algorithm's color notation
    // and its time / space complexity. 
    useEffect(() => {
        (props.name === 'Bubble Sort')? setBSColorNotationDiv(true) : setBSColorNotationDiv(false);
        (props.name === 'Selection Sort')? setSSColorNotationDiv(true) : setSSColorNotationDiv(false);
        (props.name === 'Insertion Sort')? setISColorNotationDiv(true) : setISColorNotationDiv(false);
        (props.name === 'Merge Sort')? setMSColorNotationDiv(true) : setMSColorNotationDiv(false);
        (props.name === 'Quick Sort')? setQSColorNotationDiv(true) : setQSColorNotationDiv(false);
    }, [props.name]);

    return(
        <div>
            {/*This div has generate and run algorithm buttons inside*/}
            <div>
                <div className='pt1' style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button 
                        ref={generateBtn}
                        id='generate'
                        className='black b f3 pa2 mb3 mh3 br3 dim pointer shadow-3' 
                        style={
                            isDataGenerationDisabled
                            ? 
                            {backgroundColor: 'gray', 
                             opacity: 0.1, 
                             pointerEvent: 'none',
                             color: 'lightgray'} 
                            : 
                            {backgroundColor: '#00d1b2'}} 
                        onClick={generateRandomArrayClick}
                        disabled={isDataGenerationDisabled}>Generate Random Data</button>
                    <button 
                        id='sort'
                        className='black b f3 pa2 mb3 mh3 br3 dim pointer shadow-3' 
                        style={
                            isDataSortDisabled
                            ? 
                            {backgroundColor: 'gray', 
                             opacity: 0.1, 
                             pointerEvent: 'none',
                             color: 'lightgray'} 
                            : 
                            {backgroundColor: '#D16E00'}}
                        value={props.name}
                        onClick={handleSort}
                        disabled={isDataSortDisabled}>Run {props.name}</button>
                    <button 
                        id='clear'
                        className='black b f3 pa2 mb3 ml3 mr4 br3 dim pointer shadow-3' 
                        style={
                            isDataClearDisabled
                            ? 
                            {backgroundColor: 'gray', 
                             opacity: 0.1, 
                             pointerEvent: 'none',
                             color: 'lightgray'} 
                            : 
                            {backgroundColor: '#EED484'}}
                        onClick={clearData}
                        disabled={isDataClearDisabled}>Clear</button>
                </div>
            </div>

            {/*Here is where all bars showing like a chart in the view.*/}
            {visualizerDiv? 
                <div
                    className='ba b--black bw2 ma0'
                    style={{display: 'flex', 
                            justifyContent: 'center', 
                            height: '30vh', 
                            width: '100%', 
                            transform: 'scaleY(-1)'
                           }} 
                >
                    {/*<p>The current height of the div is {divHeight}px. </p>
                      <p>The current width of the div is {divWidth}px. </p>
                      <p>The current data size is 
                         {props.generatedArray.forEach(console.log)}. </p>*/}

                        {numArray.length === 0 ? 
                            null
                            : 
                            numArray.map((element,index) => (
                                <div
                                    className='dib ba b-black'
                                    key={index}
                                    style={{
                                        height: `${element}%`,
                                        width: '100%',
                                        backgroundColor: colorArray[index]
                                    }}
                                />
                            ))
                        }
                </div>
                :
                <div
                    className='ba b--black bw2 ma0'
                    style={{display: 'flex', 
                            justifyContent: 'center', 
                            height: '30vh', 
                            width: '100%', 
                            transform: 'scaleY(-1)'
                           }} 
                >
                    {visualizerDiv? 
                            null
                            : 
                            numArray.map((element,index) => (
                                <div
                                    className='dib ba b-black'
                                    key={index}
                                    style={{
                                        height: `${element}%`,
                                        width: '100%',
                                        backgroundColor: colorArray[index]
                                    }}
                                />
                            ))
                        }
                </div>
            }

            {/*Get updated from props.name to show the corresponding one to the view.*/}
            <div style={{ display: BSColorNotationDiv ? 'block' : 'none' }}><BubbleSortColorNotation /></div>
            <div style={{ display: SSColorNotationDiv ? 'block' : 'none' }}><SelectionSortColorNotation /></div>
            <div style={{ display: ISColorNotationDiv ? 'block' : 'none' }}><InsertionSortColorNotation /></div>
            <div style={{ display: MSColorNotationDiv ? 'block' : 'none' }}><MergeSortColorNotation /></div>
            <div style={{ display: QSColorNotationDiv ? 'block' : 'none' }}><QuickSortColorNotation /></div>
        </div>
    );
}

export default SortingVisualizer;