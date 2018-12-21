import React, { Component } from 'react'
import './App.css'
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1}
    }    

    render() {
        console.log(quizData.quiz_questions[this.state.quiz_position-1])
        return <div>
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
        </div>
    }
}

export default Quiz