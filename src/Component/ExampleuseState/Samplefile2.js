import React, { useState } from 'react'

const Samplefile2 = () => {

    const [data, setData] = useState([
        {
            id: 1,
            firstName: "Iron",
            lastName: "man",
            age: 46
        },
        {
            id: 2,
            firstName: "Spider",
            lastName: "man1",
            age: 41
        },
        {
            id: 3,
            firstName: "Thor",
            lastName: "Capitan",
            age: 44
        }
    ])

    const Delete = (comingid) => {
        const filterData = data.filter((item) => item.id !== comingid)
        setData(filterData)
    }

    return (
        <div>
            <ul>
                {
                    data.map((item, index) => {
                        const { firstName, lastName, age, id } = item;
                        return (
                            <li key={index}>
                                <p>firstName:{firstName}</p>
                                <p>lastName:{lastName}</p>
                                <p>age:{age}</p>
                                <button onClick={() => Delete(id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Samplefile2