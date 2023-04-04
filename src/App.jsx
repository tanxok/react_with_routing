import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import Payment from './components/Payment'
import Vehicle from './components/Vehicle'
import Renting from './components/Renting'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contactus" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
