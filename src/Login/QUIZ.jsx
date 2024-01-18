import React, { useState } from 'react'
import questions from "./Questions"
import QuizResult from './QuizResult'
const QUIZ = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [showeResult, setShowResult] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleAnswerOptiion = (isCorrect) => {
        if(isCorrect) {
            setScore(score+5)
            setCorrect(correct+1)
            console.log(score+5)
            console.log(correct+1)
        }
        setClicked(true)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        const nextQuestion = currentQuestion +1
        if(nextQuestion< questions.length){
            setCurrentQuestion(nextQuestion)

        } else {
            setShowResult(true)
            setCurrentQuestion(0)
        }

    }

    const backtoQuestions = () => {
        setShowResult(false)
        setScore(0)
        setCorrect(0)
    }

  return (
    <>
    <div className="container">
    {showeResult && (<QuizResult backtoQuestions={backtoQuestions} score={score} correct={correct} />) }

        {!showeResult && (<div className="row">
            <div className="quiz card mt-5 col-6 mx-auto bg-dark text-white">
             
            <div className="question_section">
                <h5>Score: {score}</h5>
                <div className="question_count">
                    <span>{currentQuestion+1} of {questions.length}</span>
                </div>
                <div className="question_text">
                    <p className='text-center'>{questions[currentQuestion].questionText}</p>
                </div>
            </div>
            <div className="answer_section my-2 text-center">
                {questions[currentQuestion].answerOptions.map((ans, i) => {
                    return <button
                    className={`col-6 my-2 rounded-5  ${!clicked && "bg-info"}  ${clicked && ans.isCorrect? "bg-success": ""} ${clicked && !ans.isCorrect? "bg-danger": ""}` }
                    disabled={clicked} key={i} onClick={() =>handleAnswerOptiion(ans.isCorrect)} >{ans.answerText}</button>
                })}
             
            </div>
            <div>
            <button className='btn btn-danger mx-2 px-4'>Quit</button>
                <button disabled={!clicked} className='btn btn-primary px-4' onClick={handleNextQuestion}>Next</button>
            </div>
       
        </div>
        </div>)}
   
    </div>
   
    </>
  )
}

export default QUIZ