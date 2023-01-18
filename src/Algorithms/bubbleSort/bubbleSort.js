import {swap, changeTwoColors, changeOneColor} from '../CommonHelperFunctions/CommonHelperFunctions';

const bubbleSort = async(numArr, colorArr, setNumArr, setColorArr, delay)  => {

  // Note: this loop runs to completion before any setTimeout callbacks are run.
  // Use the numArr to run the for loop, because numArr is the actual bar in chart sytle
  // show in view, colorArr just the color for numArr.
	for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length - i - 1; j++) {

      // To update the state of a React component when an element 
      // inside an array changes, you can use the setColorArr method 
      // and update the array by creating a new array with the updated element
      // Below is how syntax works for update the state for color array.
      changeTwoColors(j, j+1, 'turquoise', 'turquoise', setColorArr, delay);

      // To pause the main thread of execution and not use a callback function, 
      // use the async/await syntax.
      await new Promise(resolve => setTimeout(resolve, delay));

      if (numArr[j] > numArr[j + 1]) { 

        // If need to swap, make two elements to red color 
        // for swapping indication purpose.
        changeTwoColors(j, j+1, 'red', 'red', setColorArr, delay);

        // With a pause to give time to show the effect in view. 
        await new Promise(resolve => setTimeout(resolve, delay));

        // Swap element in numArr
        swap(j, j+1, numArr); 

      }

      // After swap or no need to swap, we set color of both elements to yellow.
      // Yellow color is indication for done comparing (and swapping if needed). 
      changeTwoColors(j, j+1, 'yellow', 'yellow', setColorArr, delay);
              
      // With a pause to give time to show the effect in view.
      await new Promise(resolve => setTimeout(resolve, delay));

      // With consideration of the next iteration, we need to set the 
      // prior element in two back to #FF8200 color.
      changeTwoColors(j, j+1, '#FF8200', 'turquoise', setColorArr, delay);
     
      // At the end of the inner loop, we need to set the 
      // last element color to purple.
      // Dark green color means done sorting status for this 
      // last element in the array.
      if((j + 1) === numArr.length - i - 1) { 
        changeOneColor(j+1, 'darkgreen', setColorArr, delay);
      }
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  // After the sorting, we need to set the zero index element of the array 
  // to dark green color. 
  changeOneColor(0, 'darkgreen', setColorArr, delay);
}

export default bubbleSort;