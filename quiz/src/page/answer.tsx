import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { hpState, quizNumState } from '../recoil/atom'

import Ogata from '../assets/ogata.png'
import setting from '../const/setting.json'

const AnswerPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [result, setResult] = useState('しかし　こうげきは　はずれてしまった！')
  const [hp, setHp] = useRecoilState(hpState)
  const [quizNum, setQuizNum] = useRecoilState(quizNumState)
  const [img, setImg] = useState(Ogata)

  const quiz = setting.quiz[quizNum]

  useEffect(() => {
    switch (quiz.img) {
      case 'ogata':
        setImg(Ogata)
        break
    }
    if (location.state.num === quiz.answer) {
      setResult(`${quiz.monster}　に　${quiz.damage}　のダメージ！`)
      setHp(hp - quiz.damage)
    }
  }, [location.state])

  return (
    <section className="ResultPage">
      <div className="header">HP: {hp}</div>
      <div className="monster w-80">
        <img src={img}></img>
      </div>
      <div className="text">{result}</div>
      {
        <button
          className="bg-yellow-300"
          onClick={() => {
            navigate('/')
            setQuizNum(quizNum + 1)
          }}
        >
          次のターンへ
        </button>
      }
    </section>
  )
}

export default AnswerPage
