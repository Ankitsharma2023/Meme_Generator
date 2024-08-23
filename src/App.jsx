import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from "../component/Content.jsx"
import Header from "../component/Header.jsx"
import Overall from '../component/overall.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Overall/>
      
    </>
  )
}

export default App
