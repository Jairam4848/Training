import React, { useMemo, useState } from 'react'

const ExampleuseMemo = () => {

    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)

    const doubleNumber = useMemo(()=>{
        return(
            slowFunction(number)
        )
    },[number])

    const ChangeTheme = useMemo(()=>{
        return {
            backgroundColor: dark ? 'black' : 'white',
            backgroundColor: dark ? 'white' : 'black',
        }
    },[dark])

  return (
    <div>
        <input name='number' id='number' type='number' value={number} onChange={(e)=>setNumber(number(e.target.value))}/>
        <br/>
        <div>
            <button onClick={()=>setDark(!dark)}>ChangeTheme</button>
        </div>
        <h2 style={ChangeTheme}>the number : {doubleNumber}</h2>
    </div>
  )
}

const slowFunction = (number) =>{
    for(let i = 0; i<10000000; i++){}
    return number * 3
}

export default ExampleuseMemo