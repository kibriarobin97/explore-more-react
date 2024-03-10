import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Team from './team'
import Users from './users'

function App() {

  return (
    <>
      <h1>Explore React Core Concepts 2</h1>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
    </>
  )
}

export default App
