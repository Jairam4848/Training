// import React from 'react'
// import { useState,useEffect } from 'react'

// const Sample = () => {

//   const [count,setCount]= useState(0)

//   useEffect(() => {
//     console.log("Iam useEffect")
//   })

//   return (
//     <div>
//       <button onClick={()=>setCount(count-1)}>-</button>
//        <p>{count}</p>
//        <button onClick={()=>setCount(count+1)}>+</button>
//     </div>
//   )
// }

// export default Sample





// import React from 'react'
// import { useState,useEffect } from 'react'

// const Sample = () => {

//   const [count,setCount]= useState(0)

//   useEffect(() => {
//     console.log("Iam useEffect",count)
//   })

//   return (
//     <div>
//       <button onClick={()=>setCount(count-1)}>-</button>
//        <p>{count}</p>
//        <button onClick={()=>setCount(count+1)}>+</button>
//     </div>
//   )
// }

// export default Sample





// import React from 'react'
// import { useState,useEffect } from 'react'

// const Sample = () => {

//   const [count,setCount]= useState(0)

//   useEffect(() => {
//     console.log("Iam useEffect",count)
//   },[])

//   return (
//     <div>
//       <button onClick={()=>setCount(count-1)}>-</button>
//        <p>{count}</p>
//        <button onClick={()=>setCount(count+1)}>+</button>
//     </div>
//   )
// }

// export default Sample






// import React from 'react'
// import { useState, useEffect } from 'react'

// const Sample = () => {

//   const [count, setCount] = useState(0)
//   const [toggle, setToggle] = useState(false)

//   useEffect(() => {
//     console.log("Iam useEffect", count)
//   }, [count])

//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>{toggle ? "close" : "open"}</button>
//       <br/>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

// export default Sample



import React from 'react'
import { useState, useEffect } from 'react'

const Sample = () => {

  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log("Iam useEffect", count)
  }, [count,toggle])

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>{toggle ? "close" : "open"}</button>
      <br/>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Sample