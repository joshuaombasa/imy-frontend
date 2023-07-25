import React, { useState, useContext } from 'react'

import './App.css'
import Hero from './Hero'
import Users from './Users'

import { signupContext } from './context/SignupContextProvider'

function App() {

  const { getImages, imagesData } = useContext(signupContext)
 
  let iamgesJsx 
  if (imagesData) {
    iamgesJsx = imagesData.map(image => {
      return  <img key={image.id} src={image.url} alt={image.name} />
    }) 
  }

  return (
    <>
     <Hero/>
     <button onClick={() => getImages()}>Get images</button>
     {imagesData && iamgesJsx }
     {imagesData && <Users/>}
    </>
  )
}

export default App
