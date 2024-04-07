import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import History from './Components/History'
import Maths from './Components/Maths'
import English from './Components/English'
import Science from './Components/Science'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<History />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/english" element={<English />} />
        <Route path="/science" element={<Science />} />
      </Routes>
    </div>
  )
}

export default App