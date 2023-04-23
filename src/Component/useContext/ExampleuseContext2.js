import React, { Children, createContext } from 'react'

export const UserContext = React.createContext()

const UserContextProvider = ({ Children }) => {
    return (
        <UserContext.Provider value={[
            {
                id: 1,
                name: "sreekanth",
                age: 21
            },
            {
                id: 2,
                name: 'mohan',
                age: 30,
            },
            {
                id: 3,
                name: 'jai',
                age: 22,
            },
            {
                id: 4,
                name: 'ravi',
                age: 40
            },
            {
                id: 5,
                name: 'ram',
                age: 40
            }
        ]}>
            {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider