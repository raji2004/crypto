import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{Nav,Hero,About,WhatWeDo,Howtobuy,Allocation,DrawerAppBar,Social}from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DrawerAppBar/>
      <Hero/>
      <About/>
      <WhatWeDo/>
      <Howtobuy/>
      <Allocation/>
      <Social/>

     
    </div>
  )
}

export default App
