import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{Nav,Hero,About,WhatWeDo,Howtobuy,Allocation}from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <WhatWeDo/>
      <Howtobuy/>
      <Allocation/>

     
    </div>
  )
}

export default App
