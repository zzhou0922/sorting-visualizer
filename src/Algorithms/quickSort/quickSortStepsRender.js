// We get the sortSteps from getQuickSortSteps function (which within the same folder).
// sortSteps is an array, it contains two arrays in every element. 
// sortSteps[i][0] is representing the number array.
// sortStep[i][1] is representing the color array.
// sortStep is a whole record of the number array 
// and the color array changing during the merge sort process (in getQuickSortSteps).
// We just need to follow along with this sortStep array 
// to render the changes in the view to showcase the merge sort process. 
const quickSortStepsRender = async(sortSteps, setNumArr, setColorArr, shouldStop, delay) => {
	for(let i = 0; i < sortSteps.length; i++) {
		
		// Break if shouldStop is true.
		if(shouldStop) {
			break;
		}

		// Show the number array changing during the merge sort process.
		setNumArr(prevNum => {
			let newNum = [...prevNum];
			newNum = sortSteps[i][0];
			return newNum;
		});

		// Show the color array changing during the merge sort process.
		setColorArr(prevColor => {
			let newColor = [...prevColor];
			newColor = sortSteps[i][1];
			return newColor;
		});

	  	await new Promise(resolve => setTimeout(resolve, delay));
	}
}

export default quickSortStepsRender;