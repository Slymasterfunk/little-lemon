import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import ReservePage from './pages/ReservePage.jsx'
import ConfirmationPage from './pages/ConfirmationPage.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='ReservePage' element={<ReservePage />} />
        <Route path='ConfirmationPage' element={<ConfirmationPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
