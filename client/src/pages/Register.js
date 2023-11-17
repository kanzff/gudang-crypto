import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const access_token = localStorage.getItem('access_token')

    const baseUrl =  "http://localhost:3000"

    const reigister = (name, email, phone, password, role, is_active) => {
        axios.post(`${baseUrl}/user/register`, {
            name,
            email,
            phone,
            password,
            role,
            is_active,
        })
        .then(res => {
            console.log(res)

        })
        .catch(err => {
            console.log(err)
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        reigister(name, email, phone, password,'user', true)
    }



    return (
        <>
            <div className='mt-32 max-w-screen-2xl flex items-center justify-center mx-auto p-4'>
                <div className="w-[30rem] space-y-6 border rounded-lg p-8 h-[555px] flex justify-center items-center bg-blue-300">
                    <p className='text-4xl font-semibold'>Perfey</p>
                </div>
                <div className="w-[30rem] space-y-6 border rounded-lg p-8">
                    <h3 className="text-2xl text-center font-medium text-gray-900 dark:text-white">Register</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Nama" />
                        </div>
                        <TextInput id="name" type="text" required value={name} onChange={(e)=> setName(e.target.value)} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput id="email" type="text" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="No. Telepon" />
                        </div>
                        <TextInput id="phone" type="number" required value={phone} onChange={(e)=> setPhone(e.target.value)} />
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

export default Register