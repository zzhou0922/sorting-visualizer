const mergeSortColorNotation = () => {
	return (
        <div>
            {/*These divs show all colors I used in merge sort for animation indication.*/}
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
                             backgroundColor: '#F2F0A1',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Split Area </span>
                    </div>
                </div> 

                <div className='dib pl4 pr6 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'turquoise',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Ready To Merge </span>
                    </div>
                </div> 

                <div className='dib pl4 pr5 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'lightgray',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Merge Area </span>
                    </div>
                </div> 

                <div className='dib ph5 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'white',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Ready For Element </span>
                    </div>
                </div> 

                <div className='dib ph6 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'red',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Assign Element </span>
                    </div>
                </div> 

                <div className='dib pl4 pr6 pt1'>
                    <div style={{
                             width: '20px', 
                             height: '20px',
                             backgroundColor: 'yellow',
                             whiteSpace: 'pre'
                            }}>
                        <span className='b'>&nbsp; &nbsp; &nbsp; Done Assignment </span>
                    </div>
                </div> 

                <div className='dib pl4 pr5 pt1'>
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

        {/*This div shows the time & space complexity for merge sort*/}
            <div>
                <p className='b'>[Time Complexity - Best, Average & Worst: O(n log(n))]&nbsp;&nbsp; | &nbsp;&nbsp;[Worst Space Complexity - O(n)]</p>
            </div>
        </div>
	);
}

export default mergeSortColorNotation;