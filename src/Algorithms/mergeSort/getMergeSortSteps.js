// The purpose of this function is do the merge sort for the number array 
// and give records to sortSteps variable.
// (numArr) is the number array from the Sorting Visualizer container.
// (colorArr) is the color array from the Sorting Vosualizer container.
// (indexArr) is the index array corresponding to the number array from 
// the Sorting Visualizer container and it is used with mergeRangeRecord.
// (stepRecord) is the record of all changes in the number array and the color array. 
// (mergeRangeRecord) is the record of dynamic index changes during 
// the splitting part of the merge sort, and it also provides traces back 
// for the number array and color array during the merge part of the merge sort. 
const getMergeSortSteps = (numArr, colorArr, indexArr, stepRecord, mergeRangeRecord) => {

	// When every time the array inside merge sort is nailed down to only one element. 
	// Then indexForSplitting variable would be incremented. 
	// It is used to update the color of the specific element in the number array 
	// during the splitting part of the merge sort.  
	let indexForsplitting = 0;
	
	// For my understanding is the mergeSort part is more like the splitting part 
	// of the merge sort. 
	// (array) is part of the number Array. 
	// It would be a new array in each iteration of the recursive call. 
	// (startIndex, endIndex) normally would not be needed in the merge sort,
	// I have these two because I want to have the light yellow color for every 
	// split part of the number array, it is a color for the purpose of my design 
	// of how the merge sort animation looks like. 
	// (indexArray) is will according to how the array gets split,  
	// it gets split in the same way, it would be used when the merge happens 
	// in merge sort.
	// For example: [23, 14, 1, 6, 24] 
	// The split process would be something below (left), 
	// and indexArray is someghint below (right):  
	// [23, 14, 1, 6, 24]     ---    [0, 1, 2, 3, 4]  --> indexArr
	// [23 , 14]              ---    [0, 1]           --> indexArr
	// [1, 6, 24]             ---    [2, 3, 4]        --> indexArr
	// [6, 24]                ---    [3, 4]           --> indexArr
	//                                 ↓                      
	//                All indexArr(s) above are in (mergeRangeRecord)        
	const mergeSort = (array, startIndex, endIndex, indexArray) => {
	  if (array.length <= 1) {

	  	// It is for the color of merge sort animation purposes, 
	  	// I want to set it to '#F2F0A1' which is the light yellow color first. 
	  	// And it is using deep copy which will not have any effect on the number array. 
	  	updateStepRecord(indexForsplitting, numArr, colorArr, '#F2F0A1', stepRecord);

	  	// It is for the color of merge sort animation purposes, 
	  	// I want to set it to '#F2F0A1' which is the tuequoise color right after 
	  	// the light yellow color. But it will effect on the number array.
	  	updateStepRecordWithoutDeepCopy(indexForsplitting, numArr, 
	  									colorArr, 'turquoise', stepRecord);

	  	// If numArr length is one, that means we don't need to do merge sort
	  	// Then simply set the elment of the array to dark green color. 
	  	if(numArr.length === 1) {
	  		updateStepRecordWithoutDeepCopy(indexForsplitting, numArr, 
	  									colorArr, 'darkgreen', stepRecord);
	  	}

	  	// indexForsplitting would be increment any time when array is only 
	  	// one element inside.
	  	indexForsplitting++;

	  	// return 
	    return array;
	  }

	  // Push indexArray into mergeRangeRecord. 
	  // That's how mergRangeRecord all indexArray(s).
	  mergeRangeRecord.push(indexArray);


	  // This condition is for the light yellow color 
	  // in a splitted part of the number array
	  if(array.length < numArr.length) {

	  	// JSON.parse(JSON.stringify()) is how deepcopy create for 
	  	// numArr and colorArr
	  	const tempDeepCopyOfNumArr = JSON.parse(JSON.stringify(numArr));
	  	const tempDeepCopyOfcolorArr = JSON.parse(JSON.stringify(colorArr));

	  	// startFromNumArr is to store the index of the first occurrence of 
	  	// array[0] in the number array
	  	let startFromNumArr = numArr.indexOf(array[0]);

	  	// endFromNumArr is to store the index of the last index of the
	  	// array that is a part of the number array. If there is any, 
	  	// otherwise the initial assign is null. 
	  	let endFromNumArr = null;

	  	// Another condition to confirm that array is exist in the number array.
	  	// If this condition met, endFromNumArr will get assigned to an index.
	  	if(startFromNumArr >= startIndex 
	  		&& startFromNumArr <= endIndex
	  		&& array.length <= endIndex) {
	  		endFromNumArr = startFromNumArr + array.length - 1; 		
	  	} 

	  	// If endFromNumArr is not null, we can start to give the light yellow
	  	// color to this part of the number array.
	  	if(endFromNumArr !== null) {
	  		for(let i = startFromNumArr; i <= endFromNumArr; i++) {
	  			colorArr[i] = '#F2F0A1';
	  		}
	  	}

	  	// Put this changes to stepRecord.
	  	const tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// Give back what original numArr and colorArr is to both of them.
		numArr = tempDeepCopyOfNumArr;
		colorArr = tempDeepCopyOfcolorArr;
	  }

	  // Split the array into two halves
	  const middle = Math.floor(array.length / 2);
	  const left = array.slice(0, middle);
	  const right = array.slice(middle);

	  // Also split the index array into two halves
	  const indexLeft = indexArray.slice(0, middle);
	  const indexRight = indexArray.slice(middle);

	  // Sort the left and right halves
	  const sortedLeft = mergeSort(left, 0, middle, indexLeft);
	  const sortedRight = mergeSort(right, middle, array.length, indexRight);

	  // Merge the sorted halves and return the result
	  return merge(sortedLeft, sortedRight);
	}

	// This function is the merge part of the merge sort.
	function merge(left, right) {
	  // create a new empty array to store the merged elements
	  const merged = [];

	  // This is where we start to use the mergeRangeRecord for the dynamic 
	  // index range during the split part of the merge sort.
	  // We use pop() to achieve that. 
	  // Let's see the example below to understand why we need pop() to 
	  // make that work. First, we need to know that merge happens when there are 
	  // at least two elements that need to swap, then we keep merging until we 
	  // have no more merge tasks on the stack.  With this running mechanism, 
	  // we still use the example above to demonstrate the running process:
	  // [0, 1, 2, 3, 4] 
	  // [0, 1]     --->     This is the first time enter the 'merge' function
	  //                     So we know that something should change for both
	  //                     number array and color array in their index 0 and 1.
	  //                     Because we pop that out. Now the mergeRangeRecord 
	  //					 only remains [0, 1, 2, 3, 4] inside.
	  //
	  // (SPLIT PART KEEP RUNNING UNTIL WE HIT ANOTHER TWO ELEMENTS NEED TO MERGE)
	  // 
	  // [3, 4]     --->     This is the second time enter the 'merge' function 
	  //                     because we need to merge again. So we know that something
	  //					 should change for both number array and color array in 
	  //                     their index 3 and 4. And we pop that out. Until this point,
	  //					 the mergeRangeRecord remains [0, 1, 2, 3, 4] and [2, 3, 4].
	  // [2, 3, 4]  --->     This is the next pop out because merging is keep going. 
	  //                     Same as above, [2, 3, 4] is something need to update in the
	  //                     number and color array.
	  // [0, 1, 2, 3, 4] --> This is the last time for merge. Every element inside the 
	  //                     number array and color array will be update one time. 
	  // That's how pop() is useful in this case for merge. 
	  const indexRange = mergeRangeRecord.pop();

	  // i is used to increment for indexRange.
	  let i = 0;

	  // As the name of the function, set the specific part of the color array 
	  // to light gray color.
	  updateMergeRangeToLightGrayNoDeepCopy(indexRange, numArr, colorArr, stepRecord);


	  // temp variable is for each element that need to merge.
	  let temp = null;

	  // While both arrays have elements, take the smaller of the two elements and
	  // add it to the merged array.
	  while (left.length > 0 && right.length > 0) {

	  	// Get the smaller element out of left and right
	  	// to merge during the while loop.
	    if (left[0] < right[0]) {
	      temp = left.shift();
	    } else {
	      temp = right.shift();
	    }	  

	    // Set the specific element to white color to indicate that 
	    // it needs a new value. 
	    // Then make a deep copy of numArr and colorArr and push it 
	    // to stepRecord. 
	    colorArr[indexRange[i]] = 'white'
	    let tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// Set the specific element to red color to indicate that 
	    // it needs a new value. 
	    // Then make a deep copy of numArr and colorArr and push it 
	    // to stepRecord. 
	    colorArr[indexRange[i]] = 'red'
	    tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// Update the specific element to a new value.
		numArr[indexRange[i]] = temp;

		// Set the specific element to yellow color to indicate that 
	    // it needs a new value. 
	    // Then make a deep copy of numArr and colorArr and push it 
	    // to stepRecord. 
		colorArr[colorArr.indexOf('red')] = 'yellow';
		tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// Increment the i. 
		i++;

		// Push temp variable to merged array.
	  	merged.push(temp);
	  }

	  // Set the temp variable to null again for upcoming use purpose.
	  temp = null;


	  // Add any remaining elements from the left array	or the right array.  
	  while (left.length > 0 || right.length > 0) {
	  	if(left.length > 0) {
	  	  temp = left.shift();
	  	} else {
	  	  temp = right.shift()
	  	}

	  	// Set the specific element to white color to indicate that 
	    // it needs a new value. 
	    // Then make a deep copy of numArr and colorArr and push it 
	    // to stepRecord.
	  	colorArr[indexRange[i]] = 'white'
	    let tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// Set the specific element to red color to indicate that 
	    // it needs a new value. 
	    // Then make a deep copy of numArr and colorArr and push it 
	    // to stepRecord. 
	  	colorArr[indexRange[i]] = 'red';
		tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// Push temp variable to merged array.
	  	merged.push(temp);

	  	// Set the specific element to yellow color to indicate that 
	    // it needs a new value. 
	    // Then make a deep copy of numArr and colorArr and push it 
	    // to stepRecord. 
		colorArr[indexRange[i]] = 'yellow';
		numArr[indexRange[i]] = temp;
		tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
		
		// Increment the i.
		i++;
	  }

	  // If mergeRangeRecord is empty means we done the merge sort,
	  // Then We simply set all element inside color array to darkgreen color.
	  if(mergeRangeRecord.length === 0) {
	  	for(let j = 0; j < indexRange.length; j++) {
	  		colorArr[indexRange[j]] = 'darkgreen';
	  		const tempStatus = [numArr, colorArr];
	  		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));	
	  	}
	  }

	  // Return merged.
	  return merged;
	}

	// Retrun mergeSort. 
	return mergeSort(numArr, 0, numArr.length, indexArr);

}


// Helper function for the single element in the spilt part of the merge sort array.
// This function comes with deepcopy of the numArr and colorArr so it would not effect
// the original numArr and colorArr.
function updateStepRecord(index, numArr, colorArr, color, stepRecord) {
	const tempDeepCopyOfNumArr = JSON.parse(JSON.stringify(numArr));
	const tempDeepCopyOfcolorArr = JSON.parse(JSON.stringify(colorArr));
	colorArr[index] = color;
	const tempStatus = [numArr, colorArr];
	stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
	numArr = tempDeepCopyOfNumArr;
	colorArr = tempDeepCopyOfcolorArr;
}

// Helper function for the single element in the spilt part of the merge sort array.
function updateStepRecordWithoutDeepCopy(index, numArr, colorArr, color, stepRecord) {
	colorArr[index] = color;
	const tempStatus = [numArr, colorArr];
	stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
}

// As the name of the function, set the specific part of the color array 
// to light gray color in the merge part of the merge sort. 
function updateMergeRangeToLightGrayNoDeepCopy(range, numArr, colorArr, stepRecord) {
	for(let i=0; i < range.length; i++) {
		colorArr[range[i]] = 'lightgray'
	}
	const tempStatus = [numArr, colorArr];
	stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
}

// Export getMergeSortSteps function.
export default getMergeSortSteps;