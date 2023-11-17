import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const baseUrl =  "http://localhost:3000"

    const login = (email, password) => {
        axios.post(`${baseUrl}/user/login`, {
            email,
            password,
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('email', res.data.email)
            localStorage.setItem('role', res.data.role)
            localStorage.setItem('username', res.data.name)
            navigate('/dashboard')

        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <>
            <div className='mt-32 max-w-screen-2xl flex items-center justify-center mx-auto p-4'>
                <div className="w-[30rem] space-y-6 border rounded-lg p-8 h-[555px] flex justify-center items-center bg-blue-300">
                    <p className='text-4xl font-semibold'>Perfey</p>
                </div>
                <div className="w-[30rem] h-[556px] py-36 space-y-6 border rounded-lg p-8">
                    <h3 className="text-2xl text-center font-medium text-gray-900 dark:text-white">Login</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput id="email" type="text" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Password" />
                        </div>
                        <TextInput id="password" type="password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <div className="w-full flex justify-center">
                        <Button onClick={handleSubmit}>SIMPAN</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login