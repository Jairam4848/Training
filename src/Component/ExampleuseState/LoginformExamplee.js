import React, { useState } from 'react'

const LoginformExamplee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let userObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        console.log(userObj)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-content'>
                    <input type='text' name="firstName" id='firstName' value={firstName} placeholder='Enter Your firstName' onChange={(e) => { setFirstName(e.target.value) }} />
                </div>
                <br />
                <div className='form-content'>
                    <input type='text' name="lastName" id='lastName' value={lastName} placeholder='Enter Your lastName' onChange={(e) => { setLastName(e.target.value) }} />
                </div>
                <br />
                <div className='form-content'>
                    <input type='email' name="email" id='email' value={email} placeholder='Enter Your email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <br />
                <div className='form-content'>
                    <input type='password' name="password" id='password' value={password} placeholder='Enter Your password' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <br />
                <div className='form-content'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginformExamplee