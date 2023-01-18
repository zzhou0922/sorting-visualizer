import {changeTwoColors, changeOneColor} from '../CommonHelperFunctions/CommonHelperFunctions';

const seletionSort = async(numArr, colorArr, setNumArr, setColorArr, delay)  => {

	// Outer for loop
	for (let i = 0; i < numArr.length; i++) {
		// Variables minNum and minNumIndex for the minimum in seletion sort
		let minNum = numArr[i]; 
		let minNumIndex = i; 

		// This variable is used to set the previous minimum color 
		// back to orange color if new minimum color comes up.
		let preMinColorIndex = i;


		// Anytime we find a new minimum, we will use the 
		// minColorChange to let color array know that
		// new minimum of color needs to be updated color. 
		let minColorChange = false;

		// Inner for loop 
		for(let j = i + 1; j < numArr.length; j++) {
      
      		// Use setTimeout to set the current i & j element to turquoise color
          	// Any previous j element (if not the minimum) 
          	// set back to #FF8200, which is the color close to orange.
          	setTimeout(() => {
        		setColorArr(prevColor => {
          			const newColor = [...prevColor];
          			newColor[i] = 'turquoise';
          			if (j > i + 1 && j-1 !== minNumIndex) {
          				newColor[j-1] = '#FF8200';
          			}
          			newColor[j] = 'turquoise';
          			return newColor;
        		});
      		}, delay);

      		await new Promise(resolve => setTimeout(() => resolve(), delay));

			if(numArr[j] < minNum) {

				preMinColorIndex = minNumIndex;
				minColorChange = true;

				minNum = numArr[j];
				minNumIndex = j;	

				if(minColorChange) {
					setTimeout(() => {
			        	setColorArr(prevColor => {
			          		const newColor = [...prevColor];
			          		if(preMinColorIndex !== i && preMinColorIndex !== numArr.length-1) {
			          			newColor[preMinColorIndex] = "#FF8200";
			          		}
			          		newColor[minNumIndex] = '#F1E6B2';
			          		return newColor;
			        	});
		      		}, delay);

		      		await new Promise(resolve => setTimeout(() => resolve(), delay));
		      		minColorChange = false;
				}
			}

			// If j equals to arr.length-1 means we at the last element of array.
          	// We need to consider different senario. 
			if(j === numArr.length - 1) {

				if (minNumIndex === i) {
					// Means the minimum element is located at 
					// the beginning index of the array.
					// Do not need to swap. 
					// Set the beginning element to yellow color
					// and the last element to #FF8200 color
					// to indicate that no need to swap.
			      	changeTwoColors(i, j, 'yellow', '#FF8200', setColorArr, delay);

			      	await new Promise(resolve => setTimeout(() => resolve(), delay));
				} else if (minNumIndex === j) {
					// Means the minimum element is located at last index of the array.
					// Swap the last elment with the first one. 

					// In this case, first make two swap elements to red color
					changeTwoColors(i, minNumIndex, 'red', 'red', setColorArr, delay);

			      	await new Promise(resolve => setTimeout(() => resolve(), delay));

			      	// Swap here. 
			      	let temp = numArr[i];
					numArr[i] = minNum;
					numArr[minNumIndex] = temp;

					// Make two swap elements to yellow color after done swapping. 
			      	changeTwoColors(i, minNumIndex, 'yellow', 'yellow', setColorArr, delay);

			      	await new Promise(resolve => setTimeout(() => resolve(), delay));

			      	// Make the last element back to #FF8200 color.
			      	if(i !== numArr.length-1) {
				      	changeOneColor(minNumIndex, '#FF8200', setColorArr, delay);
				      	// await new Promise(resolve => setTimeout(() => resolve(), delay));
			      	}

				} else {
					// Means the minimum element is located at neither the beginning index  
					// nor the last index of the array.

					// In this case, first make two swap elements to red color,
					// and last element to #FF8200 color.
					setTimeout(() => {
			        	setColorArr(prevColor => {
			          		const newColor = [...prevColor];
			          		newColor[i] = 'red';
			          		newColor[minNumIndex] = 'red';
			          		newColor[j] = '#FF8200';
			          		return newColor;
			        	});
			      	}, delay);

			      	await new Promise(resolve => setTimeout(() => resolve(), delay));

			      	// Swap here. 
			      	let temp = numArr[i];
					numArr[i] = minNum;
					numArr[minNumIndex] = temp;

					// Make two swap elements to yellow after done swapping. 
			      	changeTwoColors(i, minNumIndex, 'yellow', 'yellow', setColorArr, delay);
			      	await new Promise(resolve => setTimeout(() => resolve(), delay));

			      	// Last make the minimum element to #FF8200 color.
			      	changeOneColor(minNumIndex, '#FF8200', setColorArr, delay)
			      	await new Promise(resolve => setTimeout(() => resolve(), delay));
				}


				// By the time j is at the last element,
				// make the first element to dark green color,
				// it means that first element is done sorting. 
		      	changeOneColor(i, 'darkgreen', setColorArr, delay)
			}	  
		}
	}

	// Set the last element of array to dark green color. 	
	changeOneColor(colorArr.length-1, 'darkgreen', setColorArr, delay)
}

export default seletionSort;