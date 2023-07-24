import React from "react";

const signupContext = React.createContext()

function SignupContextProvider(props) {
    const [imagesData, setImagesData] = React.useState()

    function signupBuild(formData) {

        const data = new FormData

        // Append regular form data fields to the FormData object
        data.append('name', formData.name)
        data.append('location', formData.location)

        // Append the image file to the FormData object
        data.append('userImage', formData.userImage)

        fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    function getImages() {
        fetch('http://localhost:3000/getImages')
              .then(res => res.json())
              .then(data => console.log(data))
    }

    return (
        <signupContext.Provider value={ 
            {
                signupBuild: signupBuild ,
                getImages: getImages
             }}
        >
            {props.children}
        </signupContext.Provider>
    )
}

export {SignupContextProvider, signupContext}