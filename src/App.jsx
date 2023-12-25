import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './routes/home'
import Contact from './routes/contact'
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className='fixed top-0 w-[100vw] z-[100]'> */}

    <Navbar/>
    {/* </div> */}
      <Routes>

<Route path='/' element={<Home />} />
<Route path='/contact' element={<Contact />} />
{/* <Route path='/blog' element={<Blog />} /> */}
</Routes>
    </>
  )
}

export default App
