import React, { useState, useEffect } from 'react'

const ExampleuseEffect1 = () => {

  const [count, setCount] = useState(0)
  const [pagewidth, setPagewidth] = useState(window.innerWidth)

  useEffect(() => {
    const resizeHandler = window.addEventListener("resize", () => {
      setPagewidth(window.innerWidth)
    })
    console.log("I am coming from useEffect")

    return () => {
      console.log("Iam removing")
      window.removeEventListener("resize", resizeHandler)
    }

  }, [count])

  return (
    <div>
      <h3>{pagewidth}</h3>
      <h2>{count}</h2>
    </div>
  )
}

export default ExampleuseEffect1

