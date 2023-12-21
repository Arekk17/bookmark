import React, { useState } from 'react'
import { IconArrow } from '../../assets/Icon/IconArrow'
import './DropDownList.scss'

const questions = [
  {
    question: 'What is Bookmark?',
    answer:
      'Bookmark is a browser extension that allows you to save and organize your favorite web pages.',
  },
  {
    question: 'How can I request a new browser?',
    answer:
      'You can request a new browser by filling out this form: [browser request form](https://help.boostcommerce.net/article/311-how-to-use-search-fields).',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes, there is a mobile app for both iOS and Android devices.',
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      'Bookmark works with any Chromium-based browser, such as Google Chrome, Microsoft Edge, Opera, Brave, and Vivaldi.',
  },
]

const DropDownList = () => {
  const [showAnswer, setShowAnswer] = useState({})
  const toggleAnswer = (index) => {
    setShowAnswer((prevShowAnswer) => ({
      ...prevShowAnswer,
      [index]: !prevShowAnswer[index],
    }))
  }

  return (
    <>
      {questions.map((question, index) => (
        <div key={question.question} className="dropdownlist">
          <div
            className="dropdownlist-question"
            onClick={() => toggleAnswer(index)}
          >
            {question.question}
            {showAnswer[index] ? (
              <IconArrow color="#FA5757" rotate={180} />
            ) : (
              <IconArrow />
            )}
          </div>
          {showAnswer[index] && <p>{question.answer}</p>}
        </div>
      ))}
    </>
  )
}

export default DropDownList
