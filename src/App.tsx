import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{Nav,Hero}from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Hero/>

     
    </div>
  )
}

export default App
