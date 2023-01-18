const mergeSortColorNotation = () => {
	return (
        <div>
            {/*These divs show all colors I used in merge sort for animation indication.*/}
    		<div className='pa2' 
    			 style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: '#FF8200'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Default</span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: '#F2F0A1'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Splitting Area </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'turquoise'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Ready to Merge </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'lightgray'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Merge Area </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'white'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Ready For Element </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'red'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Assign Element </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'yellow'
                                }}>
                	</div>
                    <span className='b'>&nbsp; Done Assignment </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'darkgreen'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Sorted </span>
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