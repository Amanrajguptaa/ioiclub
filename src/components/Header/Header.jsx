import React from "react";
import {Link, NavLink} from 'react-router-dom';

export default function Header()
{
    return (
        <>
        
        <nav class="w-full py-3 px-8 flex justify-between items-center sticky  top-0 z-50 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <Link to="/">
        <img class="h-14 " src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1716924157/pwioi-white_wqrpnt.svg"alt="logo"/>
        </Link>
            <ul class="hidden md:flex mr-5 items-center gap-10 text-white justify-center font-bold">
            <li className="hover:bg-[#6420AA] rounded-md p-2">
            <NavLink to="/" className={({isActive}) =>  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                Home
            </NavLink>
                             
             </li>
                <li className="hover:bg-[#6420AA] rounded-md p-2">
                <NavLink to="/events" className={({isActive}) =>  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                Events
                </NavLink> 
               </li>                
                <li className="hover:bg-[#6420AA] rounded-md p-2">
                <NavLink to="/workshop" className={({isActive}) =>  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                Workshop
                </NavLink>
                </li>
                <li className="hover:bg-[#6420AA] rounded-md p-2">
                <NavLink to="/clubs" className={({isActive}) =>  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                 Clubs
                </NavLink>
                </li>   
                <li className="bg-[#6420AA] rounded-md p-2">
                <NavLink to="/login" className={({isActive}) =>  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                Login/Signup
                </NavLink>
                </li>
            
            </ul>
            <div class="md:hidden">
            <button class="text-5xl font-bold text-white ">&#8801;</button>
            </div>
        
        </nav>
        </>
    );
}
