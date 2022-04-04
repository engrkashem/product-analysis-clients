import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    //toggle function to show & hide hamburger
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-10 h-10 text-teal-800 sm:hidden flex justify-center items-center'>
                {
                    open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>
                }
            </div>
            <div className={`sm:static absolute duration-500 ${open ? ' top-10 right-1' : 'top-[-200px]'}   bg-teal-500 flex flex-wrap justify-center items-center gap-4 py-5 h-32 sm:h-20 font-sans `}>
                <NavLink
                    className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-2 px-3 pb-1 border-rose-200' : 'text-indigo-900 font-bold border-b-2 px-4 pb-1 border-teal-700 hover:text-indigo-700  ')}
                    to={'/'}>HOME</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-2 px-3 pb-1 border-rose-200' : 'text-indigo-900 font-bold border-b-2 px-4 pb-1 border-teal-700 hover:text-indigo-700  ')}
                    to={'/reviews'}>OPINIONS</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-2 px-3 pb-1 border-rose-200' : 'text-indigo-900 font-bold border-b-2 px-4 pb-1 border-teal-700 hover:text-indigo-700  ')}
                    to={'/analysis'}>ANALYSIS</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-2 px-3 pb-1 border-rose-200' : 'text-indigo-900 font-bold border-b-2 px-4 pb-1 border-teal-700 hover:text-indigo-700  ')}
                    to={'/blogs'}>BLOGS</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-2 px-3 pb-1 border-rose-200' : 'text-indigo-900 font-bold border-b-2 px-4 pb-1 border-teal-700 hover:text-indigo-700  ')}
                    to={'/about'}>ABOUT</NavLink>
            </div>
        </nav>
    );
};

export default Header;