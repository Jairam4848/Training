import React, { useReducer } from 'react'

const reducer = (state, action) => {
  if (action.type === 'DELETE_PERSON') {
    const newPerson = state.data.filter((eachitem) => {
      return eachitem.id !== payload.action
    })
    return {
      ...state, 
      data: newPerson,
      length:state.length - 1
    }
  }
  return state        // (or)  throw new Error("data not found")
}

const ExampleuseReducer = () => {

  const initialState = {
    data: [
      {
        id: 1,
        name: "Ironman",
        email: 'email@gmail.com',
        age: 47
      },
      {
        id: 2,
        name: "Spiderman",
        email: 'email@gmail.com',
        age: 43
      },
      {
        id: 3,
        name: "Thor",
        email: 'email@gmail.com',
        age: 48
      },
    ],
    length: 3
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_PERSON',
      payload: id              //  payload (or) key (or) any
    })
  }

  const handleEdit = (id) =>{
    dispatch({
      type:"EDIT_PERSON",
      payload:id
    })
  }

  return (
    <div>
      <h2>Current State: {state.length}</h2>
      {
        state.data.map((eachitem) => {
          const { id, name, email, age } = eachitem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <p>{email}</p>
              <h4>{age}</h4>
              <button onClick={() => { handleDelete(id) }}>Delete</button>
              <button onClick={()=>{handleEdit(id)}}>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ExampleuseReducer
