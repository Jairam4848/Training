import React,{useState} from 'react'

const ExampleuseState3 = () => {
    const [list, setList] = useState([])

    const [email, setEmail] = useState({
        id: '',
        text: ''
    })
    const [firstName, setFirstName] = useState({
        id: '',
        text: ''
    })
    const [lastName, setLastName] = useState({
        id: '',
        text: ''
    })
    const [mobile, setMobile] = useState({
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
            text: email.text,
            text: firstName.text,
            text: lastName.text,
            text: mobile.text,
            id: new Date().getTime().toString()
        }
        // console.log(newTodo)
        setList([...list, newTodo])
        setEmail({
            id: '',
            text: ''
        })
        setFirstName({
            id: '',
            text: ''
        })
        setLastName({
            id: '',
            text: ''
        })
        setMobile({
            id: '',
            text: ''
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
        setEmail({
            ...email,
            text: editableitem.text,
            id: editableitem.id
        })
        setFirstName({
            ...firstName,
            text: editableitem.text,
            id: editableitem.id
        })
        setLastName({
            ...lastName,
            text: editableitem.text,
            id: editableitem.id
        })
        setMobile({
            ...mobile,
            text: editableitem.text,
            id: editableitem.id
        })
    }

    const EditChanged = (e) => {
        e.preventDefault()
        let newTodo = list.map((item) => {
            if (item.id === editing.id) {
                return {
                    text: email.text,
                    text: firstName.text,
                    text: lastName.text,
                    text: mobile.text,
                    id: editing.id
                }
            } else {
                return item
            }
        })
        setList(newTodo);
        setEmail({
            id: '',
            text: ''
        })
        setFirstName({
            id: '',
            text: ''
        })
        setLastName({
            id: '',
            text: ''
        })
        setMobile({
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
                <input type='text' name='email' id="email" value={email.text} placeholder='Enter your Email' onChange={(e) => { setEmail({ ...email, text: e.target.value }) }} />
                <br/> <br/>
                <input type='text' name='firstName' id="firstName" value={firstName.text} placeholder='Enter your FirstName' onChange={(e) => { setFirstName({ ...firstName, text: e.target.value }) }} />
                <br/> <br/>
                <input type='text' name='lastName' id="lastName" value={lastName.text} placeholder='Enter your LastName' onChange={(e) => { setLastName({ ...lastName, text: e.target.value }) }} />
                <br/> <br/>
                <input type='text' name='number' id="number" value={mobile.text} placeholder='Enter your Mobile' onChange={(e) => { setMobile({ ...mobile, text: e.target.value }) }} />
                <br /> <br/>
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
            <div>
                {
                    list.map((eachitem) => {
                        const { id, text } = eachitem;
                        console.log(eachitem)
                        return (
                            <div key={id}>
                                <span>{text}</span>
                                <button onClick={() => Changeedit(id)}>Edit</button>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExampleuseState3