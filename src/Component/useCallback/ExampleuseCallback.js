import React, { useState } from 'react'

const Title = () => {
    <h1></h1>
}

const Count = ({text,number}) => {
   console.log(`${text} rendered`)
   return <h3>{text} : {number}</h3>
}

const Button = ({children})=> {
    console.log(`${children} rendered`)
    return <button onClick={()=>{children}}></button>
}

const ExampleuseCallback = () => {

    const[age,setAge]=useState(0)
    const[salary,setSalary]=useState(8000)

    const IncrementAge = ()=> {
        setAge(age+1)
    }

    const IncrementSalary = () => {
        setSalary(salary+1)
    }

  return (
    <div>
     <Title/>
     <Count  text={"age"} number={age}/>
     <Count text={"salary"} number={salary}/>
    </div>
  )
}

export default ExampleuseCallback