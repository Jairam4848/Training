// // import React from 'react'
// import { useState } from "react";

// import ExampleuseState3 from './Component/ExampleuseState/ExampleuseState3'
// const App = () => {

//   const [text, setText] = useState("Initial text");
//   const [isEditing, setIsEditing] = useState(false);
//   return (

//     <>
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             value={text}
//             onChange={event => setText(event.target.value)}
//           />
//           <button onClick={() => setIsEditing(false)}>Save</button>
//         </div>
//       ) : (
//         <td>
//           {text}
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </td>
//       )}
//     </>
//   );
// }

// export default App


import React from 'react'
import ExampleuseState1 from './Component/ExampleuseState/ExampleuseState1'
import ExampleuseEffect4 from './Component/ExampleUseEffect/ExampleuseEffect4'

const App = () => {
  return (
    <div>
      <center>
      <ExampleuseEffect4/>
      </center>
    </div>
  )
}

export default App