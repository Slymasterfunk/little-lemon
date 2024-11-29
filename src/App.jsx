import { Outlet } from 'react-router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
