import React, {useContext} from "react";
import { signupContext } from "./context/SignupContextProvider";
import UserImage from "./UserImage";

export default function Users() {

    const { imagesData } = useContext(signupContext)

    let usersJsx

    if (imagesData) {
        usersJsx = imagesData.map(item => (
      
            <div key={item.id}>
                <h3>{item.username}</h3>
                <UserImage filename={item.file_name}/>
            </div>
        )
        )
    }

    return (
        <div className="users--container">
            {usersJsx}
        </div>
    )
}