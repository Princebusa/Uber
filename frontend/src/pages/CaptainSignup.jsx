import React from "react"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainContext"
import axios from "axios"

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})


    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate()


    const formhandler = async (e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
              firstname: firstname,
              lastname: lastname
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicletype: vehicleType
            }
          }
        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
        setVehicleColor('')
        setVehiclePlate('') 
        setVehicleCapacity('')
        setVehicleType('')

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, newUser)

        if(response.status === 201) {
            const data = response.data
            console.log(data)
            setUserData(data.user)
            localStorage.setItem('token', data.token)
            navigate('/')
        }

    }


    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center p-2">
                <h1 className="text-center font-medium rounded py-2 text-[28px]">Captain Signup</h1>
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
                    <div className="flex gap-4">
                        <input
                            value={vehicleColor}
                            onChange={(e) => { setVehicleColor(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" type="text" name="VehicleColor" placeholder="Vehicle Color" required />
                        <input
                            value={vehiclePlate}
                            onChange={(e) => { setVehiclePlate(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" type="text" name="VehiclePlate" placeholder="Vehicle Plate" required />
                    </div>
                    <div className="flex gap-4">
                        <input
                            value={vehicleCapacity}
                            onChange={(e) => { setVehicleCapacity(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" type="number" name="VehicleCapacity" placeholder="Vehicle Capacity" required />
                        <select
                            required
                            value={vehicleType}
                            onChange={(e) => { setVehicleType(e.target.value) }}
                            className="p-5 outline-none w-full bg-gray-200 font-normal rounded py-2 text-[18px]" name="VehicleType" placeholder="Vehicle Type" required >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option value="car">car</option>
                                <option value="auto">auto</option>
                                <option value="motorcycle">motorcycle</option>
                            </select>
                    </div>
                    <button className="cursor-pointer w-full bg-black text-white font-medium rounded py-2 text-[18px]" type="submit">Signup Now</button>
                
                </form>
            </div>
        </>
    )
}

export default CaptainSignup