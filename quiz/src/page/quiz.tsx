import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { hpState, quizNumState } from '../recoil/atom'

import Ogata from '../assets/ogata.png'
import setting from '../const/setting.json'

const QuizPage = () => {
  const quizNum = useRecoilValue(quizNumState)
  const [hp, setHp] = useRecoilState(hpState)
  const [img, setImg] = useState(Ogata)
  const navigate = useNavigate()

  const quiz = setting.quiz[quizNum]

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (
      event.code.indexOf('Digit') != -1 &&
      Number(event.code.replace('Digit', '')) < setting.quiz.length
    ) {
      navigate('/result', {
        state: { num: Number(event.code.replace('Digit', '')) },
      })
      document.removeEventListener('keydown', escFunction)
    }
  }, [])

  useEffect(() => {
    switch (quiz.img) {
      case 'ogata':
        setImg(Ogata)
        break
    }
    document.addEventListener('keydown', escFunction, false)
  }, [])

  return (
    <div className="QuizPage flex flex-col">
      <div className="header">HP: {hp}</div>
      <div className="text">{quiz.text}</div>
      <div className="monster w-80">
        <img src={img}></img>
      </div>
      <div className="quiz">
        <ul className="quizList flex flex-wrap">
          {quiz.list.map((data) => (
            <li key={data} className="quiz m-1 w-5/12 bg-red-600">
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default QuizPage
