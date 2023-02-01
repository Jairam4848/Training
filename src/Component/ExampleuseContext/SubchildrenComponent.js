import React, { useContext } from 'react'
import { maindataContext } from './ExampleuseContext1'

const maindata = useContext(maindataContext)
console.log(data)

const { firstName, lastName, email, age } = maindata

const SubchildrenComponent = () => {
    return (
        <div>
            {firstName}
            {lastName}
            {email}
            {age}
        </div>
    )
}

export default SubchildrenComponent