import React, { useState, useContext } from 'react'

import './App.css'
import Hero from './Hero'

import { signupContext } from './context/SignupContextProvider'

function App() {

  const { getImages } = useContext(signupContext)
 
  

  return (
    <>
     <Hero/>
     <button onClick={() => getImages()}>Get images</button>
    </>
  )
}

export default App
