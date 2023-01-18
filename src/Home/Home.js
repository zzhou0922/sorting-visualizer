import './Home.css'

const Home = () => {
	return (
		// This div contains a welcome greeting phrase and 
		// brief introduction of each sorting algorithm.
		<div className='ma5' style={{height: '100%', color: 'lightgrey'}}>
	        <h1>Welcome to my sorting visualizer</h1><br />

	        <p className="b f4">This sorting visualizer webpage will be included 
	        bubble sort, selection sort, insertion sort, <br /> 
	        merge sort, and quick sort as you can see in 
	        the navigation bar. <br /></p>

	        <p className="b f6 i">
	        <a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">Bubble sort</a> 
	        &nbsp; is a basic algorithm for arranging a string of numbers 
	        or other elements in the correct order. <br />
	       	The method works by examining each set of adjacent elements in the string, 
	       	from left to right, <br />
	       	switching their positions if they are out of order.</p>

	       	<p className="b f6 i">
	        <a href="https://www.geeksforgeeks.org/selection-sort/" target="_blank">Selection sort</a> 
	        &nbsp; is a simple and efficient sorting algorithm that works by repeatedly selecting <br /> the 
	        smallest (or largest) element from the unsorted portion of the list and moving it to the sorted 
	        portion of the list. <br />
	        The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion 
	        of the list <br />
	        and swaps it with the first element of the unsorted portion. <br />
	        This process is repeated for the remaining unsorted portion of the list until the entire 
	        list is sorted. </p>

	        <p className="b f6 i">
	        <a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">Insertion sort</a> 
	        &nbsp; is a sorting algorithm in which the elements are transferred one at a time to the 
	        right position. <br />
	        An insertion sort helps in building the final sorted list, one item at a time, 
	        with the movement of higher-ranked elements. </p>

	        <p className="b f6 i">
	        <a href="https://www.simplilearn.com/tutorials/data-structure-tutorial/merge-sort-algorithm" 
	           target="_blank">Merge sort</a>
			&nbsp; is one of the most efficient sorting algorithms. <br />
			It is based on the divide-and-conquer strategy and it uses a recursive algorithm 
			to achieve its results. <br />
			Merge sort continuously cuts down a list into multiple sublists until each has only 
			one item <br />then merges those sublists into a sorted list. </p> 

			<p className="b f6 i">
	        <a href="https://www.geeksforgeeks.org/quick-sort/" 
	           target="_blank">Quick sort</a>
			&nbsp; is a highly efficient sorting algorithm. It also is a divide-and-conquer algorithm. <br />
			It picks an element as a pivot and partitions the given array around the picked pivot. <br />
			There are many different versions of quickSort that pick pivot in different ways. <br />
			The one I implemented is picking the median as the pivot. <br />
			Other than that, we can pick the first element, the last element, or a 
			random element as the pivot as well. </p>


			<p className="b f4">Data size and delay are all on your own preferences. <br />
			The randomly generated data range is from 1 to 100. <br />
			Delay unit is a millisecond. <br /></p>

			<p className="b f3">Hope you will have a nice experience with my visualizer.</p>
		</div>
	);
}

export default Home;