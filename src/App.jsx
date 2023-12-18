import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import home from './routes/home'
import contact from './routes/contact'
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
      <Routes>

<Route path='/' element={<Note />} />
<Route path='/about' element={<About />} />
{/* <Route path='/blog' element={<Blog />} /> */}
</Routes>
    </>
  )
}

export default App
