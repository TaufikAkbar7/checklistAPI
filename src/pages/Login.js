import React, { useState, useEffect } from 'react'
import Endpoint from '../globals/api-endpoint'
import axios from 'axios'
import { FormWrap, Button } from '../components'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const login = async () => {
        axios.post(Endpoint.login, {
            username: username,
            password: password
        })
            .then(res => {
               const getToken = res.data.data.token;
               console.log(getToken)
               localStorage.setItem('token', getToken) 
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login();
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            history.push('/home')
        }
    }, [])

    return (
        <div>
            <FormWrap>
                <h1>Form Login</h1>
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
                    <div style={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 20
                    }}>
                    <Button name="Login"/>
                    <Button name="Register" link='/register'/>
                    </div>
                </form>
            </FormWrap>
        </div>
    )
}

export default Login
