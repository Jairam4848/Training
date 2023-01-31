import React, { useState } from 'react'

const Samplefile = () => {

    const [number, setNumber] = useState(0)

    return (
        <div>
            <button onClick={() => {
                setNumber((prevcount) => {
                    return prevcount + 1
                })
                setNumber((prevcount) => {
                    return prevcount + 1
                })
                setNumber((prevcount) => prevcount + 1)
            }}>increase</button>
            <p>{number} </p>
            <button onClick={() => {
                setNumber((prevcount) => { return prevcount - 1 })
                setNumber((prevcount) => prevcount - 1 )
                setNumber((prevcount) => prevcount - 1 )

            }}>decrease</button>
        </div>
    )
}

export default Samplefile