import React, {useState, useContext} from "react";
import { signupContext } from "./context/SignupContextProvider";


export default function Hero() {

    const {signupBuild} = useContext(signupContext)

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        userImage: null
      })
      
    
      function handleChange(event) {
        const {name, value, type, files} = event.target
    
        if (type === "file") {
          setFormData((prevFormData) => {
            return {
              ...prevFormData,
              [name] : files[0]
            }
          })
        } else {
          setFormData((prevFormData) => {
            return {
              ...prevFormData,
              [name]: value
            }
          })
        }
    
      }
    
      function handleSubmit(event) {
        event.preventDefault()
     
        signupBuild(formData)
    
        setFormData({name: '', location: '', userImage: null})
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
               required
            />
            <label htmlFor="location">Location:</label>
            <input 
               type="text"
               name='location'
               value={formData.location}
               onChange={handleChange}
               required
            />
            <label htmlFor="userImage">Image:</label>
            <input 
               type="file"
               name='userImage' 
               onChange={handleChange}
               required
            />
            <button>Submit</button>
          </form>
        </>
      )
}