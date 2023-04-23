import React from 'react'
import { createContext } from 'react'

export const userContext = createContext()

const initial = {
  firstName: 'Iron',
  lastName: "man",
  age: 46
}

export const userContextProvider = ({ children }) => {

  return (
    <userContext.Provider value={initial}>
      {children}
    </userContext.Provider>
  )
}

