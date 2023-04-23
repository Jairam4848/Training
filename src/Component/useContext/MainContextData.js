import React, { createContext, Children } from 'react'

export const MainContextData = React.createContext()

const MainContextDataProvider = ({ Children }) => {
    return (
        <MainContextData.Provider value={[
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
        </MainContextData.Provider>
    )
}

export default MainContextDataProvider