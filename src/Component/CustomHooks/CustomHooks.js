import React from 'react'
import UseFetch from './UseFetch'

const CustomHooks = () => {

    const data = UseFetch("https://jsonplaceholder.typicode.com/users")
    const todo = UseFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            <div>
                <h1>Users</h1>
                <ul>
                    {
                        data.map((eachitem) => {
                            const { id, name, username, email } = eachitem;
                            return (
                                <li key={id}>
                                    <p>{name}</p>
                                    <p>{username}</p>
                                    <p>{email}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr />
            <div>
                <h1>Todos</h1>
                <ul>
                    {
                        todo.map((eachitem) => {
                            const { id, title, email } = eachitem;
                            return (
                                <li key={id}>
                                    <p>{title}</p>
                                    <p>{email}</p>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CustomHooks
