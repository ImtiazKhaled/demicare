import React from 'react'
import previous from '../images/previous.jpg'
import timeline from '../images/timeline.jpg'
import thisIteration from '../images/thisIteration.jpg'
import next from '../images/next.jpg'
import question from '../images/question.jpg'
const NextIter = () => {

    return (
        <div style={{ alignContent: 'space-around' }}>
            <img src={previous} height='auto' width='100%'></img>
            <br></br>
            <img src={timeline} height='auto' width='100%'></img>
            <br></br>
            <img src={thisIteration} height='auto' width='100%'></img>
            <br></br>
            <img src={next} height='auto' width='100%'></img>
            <br></br>
            <img src={question} height='auto' width='100%'></img>
        </div>

    )
}

export default NextIter;