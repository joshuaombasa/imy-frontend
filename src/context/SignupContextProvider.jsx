import React from "react";

const signupContext = React.createContext()

function SignupContextProvider(props) {

    const [imagesData, setImagesData] = React.useState()

    const [imageLink, setImageLink] = React.useState(null)

    function signupBuild(formData) {

        const data = new FormData

        // Append regular form data fields to the FormData object
        data.append('name', formData.name)
        data.append('location', formData.location)

        // Append the image file to the FormData object
        data.append('userImage', formData.userImage)

        const uploadData = async () => {
            try {
                const res = await  fetch('http://localhost:3000/upload', {
                                        method: 'POST',
                                        body: data
                                    })
            const data = await res.json()
            console.log(data)
            } catch(error) {
                console.log(error)
            }
        }
    }

  

    

    function getImages() {
        fetch('http://localhost:3000/getImages')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImagesData(data)

            })
    }

    console.log(imagesData)

    return (
        <signupContext.Provider value={
            {
                signupBuild: signupBuild,
                getImages: getImages,
                imagesData: imagesData
            }}
        >
            {props.children}
        </signupContext.Provider>
    )
}

export { SignupContextProvider, signupContext }