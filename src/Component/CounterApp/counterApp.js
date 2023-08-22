import React from 'react'
import './counterApp.css'
import { useState } from 'react'

const CounterApp = () => {

    const [count, setCount] = useState(0);
    let stock = 10;
    return (
        <div className='wrapper'>
            <button className='minus' disabled={count === 0} onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>-</button>
            <p className='counter'>{count}</p>
            <button className='plus' disabled={count === stock} onClick={() => {
                if (stock > count) {
                    setCount(count + 1)
                }
            }}>+</button>
        </div>
    )
}

export default CounterApp