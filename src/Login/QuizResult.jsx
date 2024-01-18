import React from 'react'

const QuizResult = (props) => {
  return (
    <>
       <div className="quiz card mt-5 col-6 mx-auto bg-dark text-white">

            <div>QuizResult</div>
            <h5>Score: {props.score}</h5>
            <h5>Correct: {props.correct}</h5>
            <button className='btn btn-success col-3' onClick={props.backtoQuestions}>Back to quiz</button>
        </div>
    </>
  )
}

export default QuizResult