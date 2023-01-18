const quickSortColorNotation = () => {
    return (
        <div>
            {/*These divs show all colors I used in quick sort for animation indication.*/}
            <div className='pa2' 
                 style={{display: 'flex', justifyContent: 'sapce-evenly', width: '100%'}}>
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
                                 backgroundColor: 'turquoise'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Comparing </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'red'
                                }}>
                    </div>
                    <span className='b'>&nbsp; Need Swap / Swapping </span>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div style={{width: '20px', 
                                 height: '20px',
                                 backgroundColor: 'yellow'
                                }}>
                    </div>
                    <span className='b'>&nbsp; No Need / Done Swap </span>
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

        {/*This div shows the time & space complexity for quick sort*/}
            <div>
                <p className='b'>[Time Complexity - Best & Average: O(n log(n)) / Worst: O(n^2)]&nbsp;&nbsp; | &nbsp;&nbsp;[Worst Space Complexity - O(log(n))]</p>
            </div>
        </div>
    );
}

export default quickSortColorNotation;