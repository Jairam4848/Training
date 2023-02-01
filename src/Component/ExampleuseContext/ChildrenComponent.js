import React, { useContext } from 'react'
import { userContext } from './ExampleuseContext'

const data = useContext(userContext);
console.log(data)

const ChildrenComponent = () => {
    return (
        <div>
            {data.firstName}
            {data.lastName}
            {data.age}
        </div>
    )
}

export default ChildrenComponent





// import { createContext, useEffect, useState } from 'react';
// const UserContext = createContext('Unknown');
// function Application() {
//   const [userName, setUserName] = useState('John Smith');
//   useEffect(() => {
//     setTimeout(() => {
//       setUserName('Smith, John Smith');
//     }, 2000);
//   }, []);
//   return (
//     <UserContext.Provider value={userName}>
//       <Layout>
//         Main content
//       </Layout>
//     </UserContext.Provider>
//   );
// }