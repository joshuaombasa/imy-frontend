import React, { useState } from 'react'

import './App.css'

function App() {
 
  const [formData, setFormData] = useState({
    name: '',
    location: ''
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      }
    })

  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    setFormData({name: '', location: ''})
  }

  console.log(formData)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
           type="text"
           name='name'
           value={formData.name}
           onChange={handleChange}
            />
        <label htmlFor="location">Location:</label>
        <input 
           type="text"
           name='location'
           value={formData.location}
           onChange={handleChange}
            />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
