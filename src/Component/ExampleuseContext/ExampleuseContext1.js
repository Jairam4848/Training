import React, { createContext } from 'react'

const initialData = [
    {
        firstName: "Iron",
        lastName: 'man',
        email: "email@gmail.com",
        age: 46
    },
    {
        firstName: "Spider",
        lastName: 'man',
        email: "email@gmail.com",
        age: 42
    }
]

export const maindataContext = createContext()

export const maindataContextProvider = ({ childern }) => {
    return (
        <maindataContext.Provider value={initialData}>
            {childern}
        </maindataContext.Provider>
    )
}
