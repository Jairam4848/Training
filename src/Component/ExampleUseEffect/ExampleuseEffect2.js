import React, { useState, useEffect } from 'react'

const ExampleuseEffect2 = () => {

    const URL = "https://jsonplaceholder.typicode.com/users"

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState({ status: false, message: '' })

    const Fetecheddata = async (apiURL) => {
        setLoading(true)
        setIsError({ status: false, message: '' })
        try {
            const response = await fetch(apiURL)
            const data = await response.json()
            setUser(data)
            setLoading(false)
            setIsError({ status: false, message: '' })
            if (response.status === 404) {
                throw new Error("data not found")
            }
        } catch (error) {
            setLoading(false)
            setIsError({ status: true, message: error.message || 'Something went wrong please try again' })
        }
    }

    useEffect(() => {
        Fetecheddata(URL)
    }, [])

    if (loading) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }

    if (isError && isError.status) {              //  (or)  ?if(isError?.status)  (optional shaining)
        return (
            <div>
                <h3 style={{ color: 'red' }}>{isError && isError.status}</h3>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {
                    user.map((eachitem) => {
                        const { id, name, username, email } = eachitem;
                        return (
                            <li key={id}>
                                <div>{name}</div>
                                <div>{username}</div>
                                <div>{email}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ExampleuseEffect2












// import React, { useState, useEffect } from 'react'

// const ExampleuseEffect2 = () => {

//     const [data, setData] = useState([])
//     const [todo, setTodo] = useState([])

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(res => res.json())
//             .then(data => { setData(data) })

//         fetch("https://jsonplaceholder.typicode.com/todos")
//             .then(res => res.json())
//             .then(todo => { setTodo(todo) })

//         return () => {
//             console.log("will unmount")
//         }
//     }, [])

//     // useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/todos")
//     // .then(res => res.json())
//     // .then(todo => { setTodo(todo) })

//     //     return () => {
//     //         console.log("will unmount")
//     //     }
//     // }, [])

//     return (
//         <div>
//             <div>
//                 <ul>
//                     {
//                         data.map((eachitem) => {
//                             const { id, name, username, email } = eachitem;
//                             return (
//                                 <li key={id}>
//                                     <div>{name}</div>
//                                     <div>{username}</div>
//                                     <div>{email}</div>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//             <hr />
//             <div>
//                 <ul>
//                     {
//                         todo.map((eachitem) => {
//                             const { id, title } = eachitem;
//                             return (
//                                 <li key={id}>
//                                     <div>{title}</div>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>


//     )
// }

// export default ExampleuseEffect2