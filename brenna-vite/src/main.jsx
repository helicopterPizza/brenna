import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './Landing.jsx'
import Set from './LandingChildren/SetListChildren/Set.jsx'
import Command from './LandingChildren/SetListChildren/SetChildren/Command.jsx'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/sets/:set_id' element={<Set/>}/>
          <Route path='/sets/:set_id/commands/:step_id' element={<Command/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  //</StrictMode>,
)
