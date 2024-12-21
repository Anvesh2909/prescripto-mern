import { assets } from "../assets/assets_frontend/assets.js";
import {NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [token,setToken] = useState(true);
    const navigate = useNavigate();
    const handleNavClick = (index) => {
        setActiveIdx(index);
    };
    return (
        <nav className="flex items-center justify-between text-md py-4 mb-5 border-b border-b-gray-400">
            <img src={assets.logo} alt="logo" className="w-44 cursor-pointer" onClick={()=>{navigate('/')}}/>
            <ul className="gap-5 items-start font-medium hidden md:flex">
                {[
                    { label: "Home", path: "/" },
                    { label: "All Doctors", path: "/doctors" },
                    { label: "About", path: "/about" },
                    { label: "Contact", path: "/contact" },
                ].map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        onClick={() => handleNavClick(index)}
                        className="flex flex-col items-center"
                    >
                        <li
                            className='py-1'
                        >
                            {item.label}
                        </li>
                        <hr
                            className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                                activeIdx === index ? "block" : "hidden"
                            }`}
                        />
                    </NavLink>
                ))}
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ? (
                        <div className="flex items-center gap-2 cursor-pointer group relative">
                            <img src={assets.profile_pic} alt="" className="w-8 rounded-full"/>
                            <img className="w-2.5" src={assets.dropdown_icon} alt=""/>
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={()=>{navigate('/myprofile')}} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={()=>{navigate('/myappointments')}} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={()=>{setToken(false)}} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : <button className="bg-primary text-white px-8 py-3 rounded-full hidden md:block"
                                onClick={() => {
                                    navigate('/login')
                                }}>Create Account
                    </button>
                }
            </div>
        </nav>
    );
};
export default Navbar;