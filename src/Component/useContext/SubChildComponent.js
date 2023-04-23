import React, { useContext } from 'react'
import { UserContext } from './ExampleuseContext2'

const SubChildComponent = () => {

    const data = useContext(UserContext)
    console.log(data)

    return (
        <div>
            <ul>
                {
                    data.map((items) => {
                        const { id, name, age } = items;
                        return (
                            <div key={id}>
                                <li>{id}</li>
                                <li>{name}</li>
                                <li>{age}</li>
                            </div>

                        )
                    })
                }
            </ul>

        </div>
    )
}

export default SubChildComponent