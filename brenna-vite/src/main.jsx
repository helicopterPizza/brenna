import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Scripts from './Scripts.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Scripts />
  //</StrictMode>,
)
