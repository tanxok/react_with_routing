import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'


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
