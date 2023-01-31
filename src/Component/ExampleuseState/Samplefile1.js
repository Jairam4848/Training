import React, { useState } from 'react'

const Samplefile1 = () => {

    // const [data,setData]=useState({firstName:"Iron",lastName:'man',age:45})

    const [firstName, setFirstName] = useState("Iron")
    const [lastName, setLastName] = useState("man")
    const [age, setAge] = useState(45)


    return (
        // <div>
        //     <h3>My firstname is {data.firstName}</h3>
        //     <button onClick={()=>setData({...data,firstName:"Thor"})}>firstName</button>
        //     <h3>My lastname is {data.lastName}</h3>
        //     <button onClick={()=>setData({...data,lastName:"Spider"})}>lastName</button>
        //     <h3>My age is {data.age}</h3>
        //     <button onClick={()=>setData({...data,age:48})}>age</button>
        // </div>

        <div>
            <h3>My firstname is {firstName}</h3>
            <button onClick={() => setFirstName("Thor")}>firstName</button>
            <h3>My lastname is {lastName}</h3>
            <button onClick={() => setLastName("Spider")}>lastName</button>
            <h3>My age is {age}</h3>
            <button onClick={() => setAge(48)}>age</button>
        </div>
    )
}

export default Samplefile1