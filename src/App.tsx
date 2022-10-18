import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './App.css'
import AnswerPage from './page/answer'
import QuizPage from './page/quiz'
import ResultPage from './page/result'

function App() {
  return (
    <BrowserRouter basename="https://terao-ryohei.github.io/sokai">
      <RecoilRoot>
        <Routes>
          <Route path={`/`} element={<QuizPage />} />
          <Route path={`/result`} element={<ResultPage />} />
          <Route path={`/answer`} element={<AnswerPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
