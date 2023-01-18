const BubbleSortColorNotation = () => {
	return (
        <div>
            {/*These divs show all colors I used in bubble sort for animation indication.*/}
    		<div className='pa2 dib'>
                <div className='dib pr5 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: '#FF8200',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Default </span>
                    </div>
                </div>  

                <div className='dib pl4 pr5 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'turquoise',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Comparing </span>
                    </div>
                </div> 
                    
                <div className='dib ph5 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'red',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Swapping </span>
                    </div>
                </div> 

                <div className='dib ph5 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'yellow',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Done Swap </span>
                    </div>
                </div> 

                <div className='dib ph5 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'darkgreen',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Sorted </span>
                    </div>
                </div> 
            </div>
            
            {/*This div shows the time & space complexity for bubble sort*/}
            <div>
                <p className='b'>[Time Complexity - Best: O(n) / Average & Worst: O(n^2)]&nbsp;&nbsp; | &nbsp;&nbsp;[Worst Space Complexity - O(1)]</p>
            </div>
        </div>
	);
}

export default BubbleSortColorNotation;