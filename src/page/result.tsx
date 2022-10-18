import { useLocation, useNavigate } from 'react-router-dom'

const ResultPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="ResultPage">
      <div className="text">皆さんの回答は{location.state.num}です</div>
      <button
        className="bg-yellow-300"
        onClick={() => {
          navigate('/answer', { state: { num: location.state.num } })
        }}
      >
        技を放つ
      </button>
    </div>
  )
}

export default ResultPage
