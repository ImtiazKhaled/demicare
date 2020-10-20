import React from 'react'
import picture from './future.png'
import timeline from './timeline.png'
const NextIter = () => {

    return(
        <div style={{alignContent:'space-around'}}>
            <img src={timeline} height='auto' width='100%'></img>
            <img src={picture} height='auto' width='100%'></img>
        </div>
        
    )
}

export default NextIter;