import React, { useEffect, useRef, useState } from 'react'

const ExampleuseRef = () => {

   const [firstName,setFirstName]= useState('')
   const renderedCount = useRef(1)

   useEffect(()=>{
    renderedCount.current = renderedCount.current + 1
   })

  return (
    <div>
        <input type='text' id="firstName" name='firstName' onChange={(e)=>setFirstName(e.target.value)}/>
        <h5>typing : {firstName}</h5>
        <h3>Component rendered {renderedCount.current} times</h3>
    </div>
  )
}

export default ExampleuseRef