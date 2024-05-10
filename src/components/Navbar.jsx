import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { MdPlaylistAddCircle } from "react-icons/md";
import { AuthContext } from "../authProvider/AuthProvider";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const nav =
        user ? (<>

            <div className="flex gap-2">
                <button className="text-2xl text-[#682018]"><IoIosHome /></button>


                <NavLink to='/' className={({ isActive }) => isActive ? 'border bg-[#411b18] text-white  text-xl font-bold' : 'font-bold text-xl px-2'}>Home</NavLink>
            </div>
            <div className="flex gap-2">
                <button className="text-2xl text-[#682018]"><MdPlace /></button>

                <NavLink to='/touristsSpot' className={({ isActive }) => isActive ? 'border bg-[#411b18] text-white px-3 text-xl font-bold' : 'font-bold text-xl'}>All Tourists Spot</NavLink>
            </div>
            <div className="flex gap-2">
                <button className="text-2xl text-[#682018]"><IoMdAddCircle /></button>
                <NavLink to='/addSpot' className={({ isActive }) => isActive ? 'border bg-[#411b18] text-white px-3 text-xl font-bold' : 'font-bold text-xl'}>Add Spot</NavLink>
            </div>

            <div className="flex gap-2 ">
                <button className="text-2xl text-[#682018]"><MdPlaylistAddCircle /></button>
                <NavLink to='/myList' className={({ isActive }) => isActive ? 'border bg-[#411b18] text-white  px-3 text-xl font-bold' : 'font-bold text-xl'}>my List</NavLink>

            </div>
        </>) :
        (

            <div className="lg:flex gap-5">
                <NavLink to='/' className="flex items-center space-x-2" activeClassName="border bg-[#411b18] text-white px-3 text-xl font-bold">
                    <button className="text-2xl text-[#682018]"><IoIosHome /></button>
                    <span className="font-bold text-xl">Home</span>
                </NavLink>
                <Link to='/signin'>
                    <button className="btn bg-[#411b18] text-white w-full ">SignIn</button>
                </Link>
                <Link to='/signup'>
                    <button className="btn bg-[#411b18] text-white w-full">Registration</button>
                </Link>


                

            </div>
        )
    return (
        <div>


        <div className="navbar mb-5">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow w-52  rounded-badge bg-[#eee9aa]">
                        {nav}




                    </ul>
                </div>

                <a className="btn btn-ghost text-xl w-56"><img src='' alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                
                    {nav}
                    

                
            </div>
           


            <div className="navbar-end">
           

                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} title={user.displayName} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>

                        <ul tabIndex={0} title={user.displayName} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logOut}
                                >Logout</button>

                            </li>
                        </ul>

                    </div>
                        :
                        null
                }
            </div>
        </div>
    </div >
    );
};

export default Navbar;