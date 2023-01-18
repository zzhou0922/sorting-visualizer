import {swap, changeTwoColors, changeOneColor} from '../CommonHelperFunctions/CommonHelperFunctions';

const insertionSort = async(numArr, colorArr, setNumArr, setColorArr, delay)  => {

	let currentJ = 0;
	for(let i=0; i < numArr.length - 1; i++) {
		let j = i + 1;

		// Set current two comparing elements to turquoise color.
		changeTwoColors(i, j, 'turquoise', 'turquoise', setColorArr, delay);
   		await new Promise(resolve => setTimeout(() => resolve(), delay));

		while(j > 0 && numArr[j-1] > numArr[j]) {	
			if(numArr[j-1] > numArr[j]) {
				// If need swap, set two elements to red color.
				changeTwoColors(j, j-1, 'red', 'red', setColorArr, delay);

				// Set any elements before two swap elements to lightgray color. 
				setTimeout(() => {
				  setColorArr(prevColor => {
				    const newColor = [...prevColor];
				      for(let k=0; k<=j-2; k++) {
				      	newColor[k] = 'lightgray';
				      }
				     return newColor;
				   });
				}, delay);

				await new Promise(resolve => setTimeout(() => resolve(), delay));
			}

			// Swap two elements.
			swap(j, j-1, numArr);

			// Change two elements to yellow color for done swapping indication.
			changeTwoColors(j, j-1, 'yellow', 'yellow', setColorArr, delay);
			await new Promise(resolve => setTimeout(() => resolve(), delay));

			// Change elements to darkgreen color for done sorting indication.
			changeTwoColors(j, j-1, 'darkgreen', 'darkgreen', setColorArr, delay);
			await new Promise(resolve => setTimeout(() => resolve(), delay));
			currentJ = j;
			j -= 1;
		}

		await new Promise(resolve => setTimeout(() => resolve(), delay));
		await new Promise(resolve => setTimeout(() => resolve(), delay)); 

		// If elements doesn't need to swap, set back to green color means done sorting.
		if(currentJ > 0) {
			setTimeout(() => {
				setColorArr(prevColor => {
				    const newColor = [...prevColor];
				    for(let k = 0; k <= currentJ; k++) {
				      	newColor[k] = 'darkgreen';
				    }
				    return newColor;
				});
			}, delay);
			await new Promise(resolve => setTimeout(() => resolve(), delay));
			await new Promise(resolve => setTimeout(() => resolve(), delay));
		} else {
			changeTwoColors(i, j, 'darkgreen', 'darkgreen', setColorArr, delay);
			await new Promise(resolve => setTimeout(() => resolve(), delay));
		}
	}

	// If only 1 element in array. set it to dark green, no need to swap.
	if(numArr.length === 1) {
		changeOneColor(0, 'turquoise', setColorArr, delay);
		await new Promise(resolve => setTimeout(() => resolve(), delay));
		changeOneColor(0, 'darkgreen', setColorArr, delay);
		await new Promise(resolve => setTimeout(() => resolve(), delay));
	}

	// If last two element in array.
	if(numArr.length > 1)	{
		changeTwoColors(numArr.length-2, numArr.length-1, 
						'darkgreen', 'darkgreen', setColorArr, delay);
	}
	await new Promise(resolve => setTimeout(() => resolve(), delay));
}

export default insertionSort;