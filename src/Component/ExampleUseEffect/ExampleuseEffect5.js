import React, { useEffect, useState } from 'react'
import '../../App.css'

const ExampleuseEffect5 = () => {

    const [array, setArray] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((Response) => Response.json())
            .then((json) => {
                console.log('json',json)
                setArray(json)
            })
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th><th>UserName</th><th>Email</th><th>City</th>
                </tr>
            </table>
            {
                array.map((item) => (
                    <tr>
                        <td>{item.name}</td><td>{item.username}</td><td>{item.email}</td><td>{item.address.city}</td>
                    </tr>
                ))
            }
        </div>
    )
}

export default ExampleuseEffect5