import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppPropsDrilling from './AppPropsDrilling.jsx'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
    <AppPropsDrilling />
  // </BrowserRouter>
)
