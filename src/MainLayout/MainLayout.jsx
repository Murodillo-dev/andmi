import React from 'react'
import LeftMenu from '../Components/LeftMenu'
import { Outlet , NavLink} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='flex justify-start'>
            <LeftMenu />

            <div className="right w-[100vw] h-[100vh] pl-5">

                <div className="navbar bg-base-100">
                    <NavLink to="/" className="btn btn-white text-[#535353] hover:text-[#0867C7] bg:[#0867C71A] text-xl w-[100px]">Fanlar</NavLink>
                </div>
                <div className="subjects mt-14">
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}

export default MainLayout