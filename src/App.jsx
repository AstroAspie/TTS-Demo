import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api'

function App() {
  const [textInput, setText] = useState("")

  function handleSubmit() {
    api.get(`/convert/${textInput}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Text To Speech Demo</h1>
        <textarea
          className="form-input"
          type="text"
          value={textInput}
          onSubmit={(e) => setText(e.target.value)}
          placeholder="Input something to convert"
        ></textarea>
      </form>
    </>
  )
}

export default App
