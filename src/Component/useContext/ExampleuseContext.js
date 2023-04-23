import React, { useState } from "react";

const ParentComponent = () => {

    const [userDetails, setuserDetails] = useState({
        firstName: "Ironman",
        lastName: "sreekanth",
        email: "email@gmail.com"
    })

    return (
        <div>
            <h1>useContext ParentComponent</h1>
        </div>
    )
}


export const ChildComponent = () => {
    return (
        <div>
            <h2>ChildComponent</h2>
        </div>
    )
}

export const SubChildComponent = () => {
    return (
        <div>
            <h3>SubChildComponent</h3>
        </div>
    )
}

export default ParentComponent
