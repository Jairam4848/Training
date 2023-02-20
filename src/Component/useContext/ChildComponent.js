import React from 'react'
import { useContext } from 'react'
import { MainContextData } from './MainContextData'

const ChildComponent = () => {

    const data = useContext(MainContextData)

  return (
    <ul>
        {
            data.map((eachitem)=>{
                const {id,name,age}= eachitem;
                return(
                    <div key={id}>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{age}</li>
                    </div>
                )
            })
        }
    </ul>
  )
}

export default ChildComponent