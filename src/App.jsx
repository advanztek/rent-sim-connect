import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import AppThemeProvider from './context/AppThemeContext'

export default function App() {

  return (
    <AppThemeProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
    </AppThemeProvider>
  )
}
