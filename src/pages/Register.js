import React, { useState } from 'react'
import Endpoint from '../globals/api-endpoint'
import axios from 'axios'
import { FormWrap, Button } from '../components'
import { useHistory } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory()

    const register = async () => {
        axios.post(Endpoint.register, {
            email: email,
            username: username,
            password: password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        register();
        history.push('/')
    }

    return (
        <section>
            <FormWrap>
                <h1>Form Register</h1>
                <form onSubmit={(e) => handleSubmit(e)} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    padding: 10,
                    gap: 20
                }}>
                    <div>
                        <label>Username: </label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div style={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 20
                    }}>
                    <Button name="Register"/>
                    </div>
                </form>
            </FormWrap>
        </section>
    )
}

export default Register
