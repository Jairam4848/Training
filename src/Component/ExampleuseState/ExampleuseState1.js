import React, { useState } from 'react'

const ExampleuseState1 = () => {

    const [list, setList] = useState([])

    const [message, setMessage] = useState({
        id: '',
        text: ''
    })

    const [editing, setEditing] = useState({
        id: "",
        isediting: true
    })

    const Handlesubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            text: message.text,
            id: new Date().getTime().toString()
        }
        // console.log(newTodo)
        setList([...list, newTodo])
        setMessage({
            text: '',
            id: ''
        })
    }

    const handleDelete = (id) => {
        let newTodo = list.filter((eachitem) => {
            return eachitem.id !== id
        })
        setList(newTodo)
    }

    const Changeedit = (id) => {
        setEditing({
            ...editing,
            id: id,
            isediting: false
        })
        let editableitem = list.find((eachitem) => eachitem.id === id)
        setMessage({
            ...message,
            text: editableitem.text,
            id: editableitem.id
        })
    }

    const EditChanged = (e) => {
        e.preventDefault()
        let newTodo = list.map((item) => {
            if (item.id === editing.id) {
                return {
                    text: message.text,
                    id: editing.id
                }
            } else {
                return item
            }
        })
        setList(newTodo);
        setMessage({
            id: '',
            text: ''
        })
        setEditing({
            id: '',
            isediting: true
        })
    }

    return (
        <div>
            <form>
                <input type='text' name='message' id="message" value={message.text} placeholder='Enter your message' onChange={(e) => { setMessage({ ...message, text: e.target.value }) }} />
                <br />
                {
                    editing.isediting ?
                        (<button type='submit' onClick={Handlesubmit}>Add</button>)
                        :
                        (<button type='submit' onClick={EditChanged}>edit</button>)
                }
            </form>
            <hr />
            {
                list.length === 0 && <h5>There is no items in the list</h5>
            }
            <ul>
                {
                    list.map((eachitem) => {
                        const { id, text } = eachitem;
                        console.log(eachitem)
                        return (
                            <li key={id}>
                                <span>{text}</span>
                                <button onClick={() => Changeedit(id)}>Edit</button>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ExampleuseState1