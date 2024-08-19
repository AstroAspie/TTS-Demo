import { useEffect, useState } from 'react'
import './styles/base.css'
import api from './api'

// import InactiveApi from './components/InactiveApi'

function App() {
  const [textInput, setText] = useState("")
  const [apiStatus, setApiStatus] = useState(false)

  function handleSubmit() {
    console.log("test")
    api.get(`/convert/${textInput}`)
  }

  useEffect(() => {
    api.get(`/convert/init`)
    .then(res => {
      if (res.status == 200) {
        setApiStatus(true)
      } else {
        setApiStatus(true)
      }
    })
  }, [])

  return (
    <>
      <div className='demo-container'>
        <p>API: { apiStatus === true ? "active" : "offline" }</p>
        <form onSubmit={() => handleSubmit()} className="form-container">
          <h1 className="title">Text To Speech Demo</h1>
          <textarea
            className="form-input"
            value={textInput}
            onChange={(e) => setText(e.target.value)}
            placeholder="Input something to convert"
          ></textarea>
        </form>
      </div>
      <div onClick={handleSubmit()} className="big-btn"><button className="form-button">
        Convert
      </button></div>
    </>
  )
}

export default App
