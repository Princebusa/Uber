import React from "react"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import {UserContextData} from "../context/userContext"
import axios from "axios"

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
const { user, setUser } = useContext(UserContextData)
const navigate = useNavigate()

    const formhandler = async (e)=> {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, data)

        if (response.status === 200) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/')
        }
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <div className=" h-screen flex flex-col items-center justify-center p-2">
                <h1 className=" text-center font-medium rounded py-2 text-[28px]">User Login</h1>
                <form onSubmit={(e)=> {formhandler(e)}} className="max-w-[500px] w-full flex flex-col gap-4 w-1/3">
                    <div>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div>
                        <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="p-5 w-full outline-none bg-gray-200 font-normal rounded py-2 text-[18px] mb-5" type="password" id="password" placeholder="Password" name="password" required />
                    </div>
                    <button className="cursor-pointer w-full bg-black text-white font-medium rounded py-2 text-[18px]" type="submit">Login</button>
                </form>
                <p className="mt-3 text-[17px] font-medium">New User? <Link className="text-blue-800" to="/signup" >Create Your Account</Link></p>
            </div>
        </>
    )
}

export default UserLogin