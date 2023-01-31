// import React from 'react'

// const Samplefile4 = () => {

//     const numbers = [1, 2, 3, 3, 4, 4, 5, 7, 8]

//     return (
//         <div>
//             {numbers.map(number => <h1>{number}</h1>)}
//         </div>
//     )
// }

// export default Samplefile4



import React from 'react'

const Samplefile4 = () => {

    const numbers = [1, 2, 3, 3, 4, 4, 5, 7, 8]

    const number1 = numbers.map(number => <h1>{number}</h1>)

    return (
        <div>
            {number1}
        </div>
    )
}

export default Samplefile4