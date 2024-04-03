import React from 'react'
import { NavLink } from 'react-router-dom'

const Subjects = () => {
    return (
        <div className='flex  justify-start flex-wrap'>
            <div className="hero max-w-[400px] h-40 rounded-[20px] w-full mr-6 mb-6 bg-base-200">
                <div className="hero gap-4 p-4 flex justify-start flex-wrap ">
                    <div className='flex justify-start flex-wrap'>
                        <h1 className="text-3xl w-full font-semi-bold">Metematika</h1>
                        <NavLink to="student" className="btn mt-7 btn-primary">Davomatni ko'rish</NavLink>
                    </div>
                </div>
            </div>
            <div className="hero max-w-[400px] h-40 rounded-[20px] w-full mr-6 mb-6 bg-base-200">
                <div className="hero gap-4 p-4 flex justify-start flex-wrap ">
                    <div className='flex justify-start flex-wrap'>
                        <h1 className="text-3xl w-full font-semi-bold">Ingliz tili</h1>
                        <NavLink to="student" className="btn mt-7 btn-primary">Davomatni ko'rish</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subjects