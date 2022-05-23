import React, { useState} from 'react'
import { questions } from './misc/Questions'
import './misc/questions.css'

type QuestionProps ={
    question: string;
    answer:string;
}

const Question = ({question, answer}: QuestionProps) =>{
    const [isHidden, toggleHidden] = useState<boolean>(true)
    return (
        <article className='question'>
            <header>{question}</header>
            <p className='answer'>
                <span className={`${isHidden ? 'blurred': 'visible'}`}>
                    {answer}
                </span>
            </p>
            <footer>
                <button onClick={() => toggleHidden(!isHidden)}>Toggle Answer</button>
            </footer>
        </article>
    )
}
function UseStateHook() {
  return (
      <main>
          {questions.map((q) =>(
              <Question question={q.question} answer={q.answer} key={q.id} />
          ))}
      </main>
  )
}

export default UseStateHook