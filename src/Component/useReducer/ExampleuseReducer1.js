import React, { useEffect, useReducer, useState } from 'react'

const reducer = (state, action) => {
    if (action.type === "USER_UPDATEDATA") {
        return {
            ...state,
            userData: action.payload,
        }
    }
    if (action.type === 'LOADING') {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if (action.type === 'DELETE_USER') {
        const newUsers = state.userData.filter((eachUser) => eachUser.id !== action.payload)
        return {
            ...state,
            userData: newUsers
        }
    }
    if (action.type === 'ONCLICK_EDIT') {
        return {
            ...state,
            isEditing: action.payload
        }
    }
    if (action.type === "UPDATE_USER") {
        const newUsers1 = state.userData.map((eachUser) => {
            if (eachUser.id === action.payload.id) {
                return {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }
            } else {
                return eachUser;
            }
        })
        return {
            ...state,
            userData: newUsers1
        }
    }
    return state;
}

const ExampleuseReducer1 = () => {

    const fetchUserData = async (URL) => {
        dispatch({ type: "LOADING", payload: true })
        dispatch({ type: 'ERROR', payload: { status: false, msg: '' } })
        try {
            const response = await fetch(URL)
            const data = await response.json()
            dispatch({ type: "USER_UPDATEDATA", payload: data })
            dispatch({ type: "LOADING", payload: false })
            dispatch({ type: 'ERROR', payload: { status: false, msg: '' } })
        } catch (error) {
            dispatch({ type: "LOADING", payload: false })
            dispatch({ type: 'ERROR', payload: { status: true, msg: error.message } })
        }
    }

    useEffect(() => {
        fetchUserData("https://jsonplaceholder.typicode.com/users")
    }, [])

    const initialState = {
        userData: [],
        isLoading: false,
        isError: { status: false, msg: '' },
        isEditing: { status: false, id: '', name: '', email: '' }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const updateData = (id, name, email) => {
        dispatch({
            type: "UPDATE_USER",
            payload: {
                id, name, email
            }
        })
        dispatch({ type: "ONCLICK_EDIT", payload: { status: false, id: '', name: '', email: '' } })
    }

    const HandleDelete = (id) => {
        dispatch({
            type: "DELETE_USER",
            payload: id
        })
    }

    if (state.isLoading) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }

    return (
        <div>
            <h3>Users Information</h3>
            {state.isEditing?.status && (<EditFormContainer id={state.isEditing.id}
                comingTitle={state.isEditing.name}
                comingEmail={state.isEditing.email} updateData={updateData} />)}
            {
                state.userData.map((eachitem) => {
                    const { id, name, email } = eachitem;
                    return (
                        <div key={id} style={{ background: 'lightblue' }}>
                            <h3>{name}</h3>
                            <p>{email}</p>
                            <button onClick={() => HandleDelete(id)}>Delete</button>
                            <button onClick={() => dispatch({ type: "ONCLICK_EDIT", payload: { status: true, id: id, name: name, email } })}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}


const EditFormContainer = ({ id, comingTitle, comingEmail, updateData }) => {

    const [title, setTitle] = useState(comingTitle || '')
    const [email, setEmail] = useState(comingEmail || '')


    return (
        <div>
            <input type='text' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={() => updateData(id, title, email)}>Update Data</button>
        </div>
    )
}


export default ExampleuseReducer1  