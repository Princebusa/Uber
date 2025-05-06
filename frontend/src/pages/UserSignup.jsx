import React, {useContext, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {UserContextData} from "../context/userContext"

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContextData)

    const formhandler = async (e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if (response.status === 201) {
            const data = response.data
            console.log(data)
            setUserData(data.user)
            localStorage.setItem('token', data.token)
            navigate('/')
        }
        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
    }

    return (
        <>
            <div className=" h-screen flex flex-col items-center justify-center p-2">
                <h1 className=" text-center font-medium rounded py-2 text-[28px]">User Signup</h1>
                <form onSubmit={(e) => { formhandler(e) }} className="max-w-[500px] w-full flex flex-col gap-4 w-1/3">
                    <div className="flex gap-4">
                        <input
                            value={firstname}
                            onChange={(e) => { setFirstname(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" type="text" name="Firstname" placeholder="Firstname" required />
                        <input
                            value={lastname}
                            onChange={(e) => { setLastname(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" type="text" name="Lastname" placeholder="Lastname" required />
                    </div>
                    <div>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" type="email" name="username" placeholder="Email" required />
                    </div>
                    <div>
                        <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="p-5 w-full outline-none bg-gray-200 font-normal rounded py-2 text-[18px] mb-5" type="password" id="password" placeholder="Password" name="password" required />
                    </div>
                    <button className="cursor-pointer w-full bg-black text-white font-medium rounded py-2 text-[18px]" type="submit">Create Account</button>
                </form>
            </div>
        </>
    )
}

export default UserLogin