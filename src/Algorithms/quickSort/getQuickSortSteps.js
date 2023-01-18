// The purpose of this function is do the quick sort for the number array 
// and give records to sortSteps variable.
// There are a few different pivot selections for quick sorting, the version 
// I implemented doesn't explicitly nominate a pivot value. The pivot will be 
// generated once the left and right indexes collide during the partition part 
// of the quick sort. 
// (numArr) is the number array from the Sorting Visualizer container.
// (colorArr) is the color array from the Sorting Vosualizer container.
// (indexArr) is the index array corresponding to the number array from 
// the Sorting Visualizer container and it is used with mergeRangeRecord.
// (stepRecord) is the record of all changes in the number array and the color array.  
const getQuickSortSteps = (numArr, colorArr, indexArr, stepRecord) => {

	// Quicksort contains two parts, the partition, and quickSort, so the process for 
	// quick sorting is to enter the partition in each iteration and generate a pivot 
	// to go to the next iteration, if the index left is equal to or greater than the 
	// index right, just simply return.  
	// (array) is always the same array in each iteration. 
	// For example: [23, 14, 14, 1, 24], always the same one in each iteration.
	// (left, right) is different in each iteration. If left >= right simply return.
	// (indexArray) is indexArr in the outer funciton getQuickSortSteps.
	const quickSort = (array, left, right, indexArray) => {

		// If the index left equals index right means that there is only one element 
		// in the array that we don't need to sort for the array. So simply set it 
		// to turquoise color then set it to a dark green color to indicate that is 
		// being sorted.  
		if(left === right) {
			const lastIndexArr = indexArr.slice(left, right+1);

			colorArr[lastIndexArr[0]] = 'turquoise';
			let tempStatus = [numArr, colorArr];
			stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

			colorArr[lastIndexArr[0]] = 'darkgreen';
			tempStatus = [numArr, colorArr];
			stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
		}

		// That's the base case for the recursion call of quick sorting. 
		if(left >= right) {
			return;
		}

		// Get a newIndexArr every time to know what part of the indexArr we
		// need to update each iteration. 
		const newIndexArr = indexArr.slice(left, right+1);


		// Get the pivot in the parition function. 
		let pivotIndex = partition(array, left, right, newIndexArr); 

		// Use the pivot to get into next iteration of the quick sort.
		quickSort(array, left, pivotIndex-1, newIndexArr);
		quickSort(array, pivotIndex+1, right, newIndexArr);
	}

	// partition function will generate a pivot for next quick sort iteration. 
	// (newIndexArr) from quickSort funciton, its range (or index) is where 
	// we need to update in the number array and color array.   
	const partition = (array, left, right, newIndexArr) => {

		// When we enter partition functions, the first thing we do is get to 
		// know which part of the number array and the color array we are going 
		// to update. In order to know that we need to get a reference from newIndexArr. 
		// (tempStatus) is temp status for each update of the number array and the color
		// array.
		// (leftOfNewIndexArr, rightOfNewIndexArr) is to get the boundary for the number
		// and color array from newIndexArr.
		// By using leftOfNewIndexArr & rightOfNewIndexArr, we set the corresponding 
		// element in the color array to turquoise to indicate the beginning two 
		// elements for comparison in the number array. 
		let tempStatus = [];
		let leftOfNewIndexArr = newIndexArr[0];
		let rightOfNewIndexArr = newIndexArr[newIndexArr.length-1];
		colorArr[leftOfNewIndexArr] = 'turquoise';
		colorArr[rightOfNewIndexArr] = 'turquoise';
		tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// isLeft variable is a switch for the left pointer and the right pointer. 
		// To understand why we need pointers here you need to know how quick
		// sort work. Quick sort needs pointers. 
		let isLeft = true;

		// This while loop is how we generate the pivot. Two pointers: left and right. 
		// Start from the left side, if we need to swap, then do it, after swapping, 
		// we switch the pointer to the other one and start moving toward the center of 
		// the array, and so forth. Until the index left is equal to the index right, 
		// then we know the new pivot which is the same as their value.   
		while(left !== right && left < right) {

			// isLeft is true, start moving the left pointer. 
			if(isLeft) {
				// if array[left] is less than array[right], keep moving from left
				// but increment left and leftOfNewIndexArr by 1.
				// Also, update the specific area of the color array.
				// And put this update to stepRecords. 
				if(array[left] < array[right]) {
					colorArr[leftOfNewIndexArr] = '#FF8200';
					left++;
					leftOfNewIndexArr++;
					colorArr[leftOfNewIndexArr] = 'turquoise';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
				} else if (array[left] === array[right] && left < right) {
					// If array[left] is equal to array[right], we need to enter a 
					// while loop to check whether it keep the same condition, if yes, 
					// keep increment left and leftOfNewIndexArr by 1. 
					// Also, update the specific area of the color array.
					// And put this update to stepRecords. 
					while(array[left] === array[right] && left < right) {
							colorArr[leftOfNewIndexArr] = '#FF8200';
							left++;
							leftOfNewIndexArr++;
							colorArr[leftOfNewIndexArr] = 'turquoise';
							tempStatus = [numArr, colorArr];
							stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
					}
				} else {
					// If array[left] is larger than array[right], we need to do a swap, 
					// by doing that, we need to update the color of the specific element 
					// to red -> yellow -> turquoise. 
					// Then switch the pointer to right by set the isLeft to false.
					// Also, update the specific area of the color array. 
					// And put each color update to stepRecords. 
					colorArr[leftOfNewIndexArr] = 'red';
					colorArr[rightOfNewIndexArr] = 'red';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

					let temp = array[left];
					array[left] = array[right];
					array[right] = temp;

					colorArr[leftOfNewIndexArr] = 'yellow';
					colorArr[rightOfNewIndexArr] = 'yellow';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

					colorArr[leftOfNewIndexArr] = 'turquoise';
					colorArr[rightOfNewIndexArr] = 'turquoise';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

					isLeft = false;

				}

			// else means we start from right pointer. 
			} else {
				// if array[right] is larger than array[left], keep moving from right
				// but decrement right and rightOfNewIndexArr by 1.
				// Also, update the specific area of the color array.
				// And put this update to stepRecords.
				if(array[right] > array[left]) {
					colorArr[rightOfNewIndexArr] = '#FF8200';
					right--;
					rightOfNewIndexArr--;
					colorArr[rightOfNewIndexArr] = 'turquoise';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));				
				} else if (array[left] === array[right] && left !== right) {
					// If array[left] is equal to array[right], we need to enter a 
					// while loop to check whether it keep the same condition, if yes, 
					// keep decrement right and rightOfNewIndexArr by 1. 
					// Also, update the specific area of the color array.
					// And put this update to stepRecords. 
					while(array[left] === array[right] && left !== right) {
							colorArr[rightOfNewIndexArr] = '#FF8200';
							right--;
							rightOfNewIndexArr--;
							colorArr[rightOfNewIndexArr] = 'turquoise';
							tempStatus = [numArr, colorArr];
							stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));
					}
				} else {
					// If array[right] is smaller than array[left], we need to do a swap, 
					// by doing that, we need to update the color of the specific element 
					// to red -> yellow -> turquoise. 
					// Then switch the pointer to right by set the isLeft to true.
					// Also, update the specific area of the color array. 
					// And put each color update to stepRecords. 
					colorArr[leftOfNewIndexArr] = 'red';
					colorArr[rightOfNewIndexArr] = 'red';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

					let temp = array[left];
					array[left] = array[right];
					array[right] = temp;

					colorArr[leftOfNewIndexArr] = 'yellow';
					colorArr[rightOfNewIndexArr] = 'yellow';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

					colorArr[leftOfNewIndexArr] = 'turquoise';
					colorArr[rightOfNewIndexArr] = 'turquoise';
					tempStatus = [numArr, colorArr];
					stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

					isLeft = true;
				}
			}
		}

		// In this step, the while loop is over in this interaction, 
		// which means that we generate the pivot, and we also know that this 
		// index of elements is in the correct spot of the array. 
		// So we set it to a dark green color to indicate that is done sorting 
		// for this particular element of the array.
		// Also, update the specific element of the color array. 
		// And put each color update to stepRecords.
		colorArr[rightOfNewIndexArr] = 'darkgreen';
		tempStatus = [numArr, colorArr];
		stepRecord.push(JSON.parse(JSON.stringify(tempStatus)));

		// Return right, we can return left as well because they are the same 
		// index as this point. 
		return right;
	}

	// Call the quickSort function in the outer function. 
	quickSort(numArr, 0, numArr.length-1, indexArr);

}

// Export getQuickSortSteps function.
export default getQuickSortSteps;