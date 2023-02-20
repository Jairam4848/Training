import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "DELETE_PERSON") {
        const newPerson = state.data.filter((eachitem) => {
            return eachitem.id !== action.payload
        })
        return {
            ...state,
            data: newPerson,
            length: state.length - 1
        }
    }
    return state
}

const ExampleuseReducer = () => {

    const initialState = {
        data: [
            {
                id: 1,
                name: "jairam",
                age: 22
            },
            {
                id: 2,
                name: 'mohan',
                age: 35
            },
            {
                id: 3,
                name: 'sreekanth',
                age: 21
            }
        ],
        length: 2
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_PERSON",
            payload: id     // payload (or) key
        })
    }

    const handleEdit = (id) => {
        dispatch({
            type: 'EDIT_PERSON',
            payload: id
        })
    }

    return (
        <div>
            <h1>Current State : {state.length}</h1>
            <ul>
                {
                    state.data.map((eachitem) => {
                        const { id, name, age } = eachitem;
                        return (
                            <div key={id}>
                                <li>
                                    {name}
                                </li>
                                <li>{age}</li>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                                <button onClick={() => handleEdit(id)}>Edit</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ExampleuseReducer