import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Subjects = () => {
    const [url, setUrl] = useState('http://localhost:3001/subjects')
    const [api, setApi] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setApi(response.data)
            })
    }, [])
    return (
        <div className='flex  justify-start flex-wrap max-h-[100vh] overflow-auto'>
            {
                api.map((value) => {
                    return (
                        <div className="hero max-w-[400px] w-[30%] h-auto py-1 rounded-[20px] w-full mr-6 mb-6 bg-base-200">
                            <div className="hero gap-4 p-4 flex justify-start flex-wrap ">
                                <div className='flex justify-start flex-wrap'>
                                    <h1 className="text-xl w-full font-semi-bold">{value.name}</h1>
                                    <NavLink to="student" className="btn mt-7 btn-primary">Davomatni ko'rish</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Subjects