import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './Landing.jsx'
import Set from './LandingChildren/SetListChildren/Set.jsx'
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
      </Routes>
    </BrowserRouter>
  </div>
  //</StrictMode>,
)
