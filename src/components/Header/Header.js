import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-teal-500 flex justify-center items-center gap-8 py-5 h-20 font-sans'>
            <NavLink
                className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-4 border-rose-200' : 'text-indigo-900 font-bold hover:text-indigo-700  ')}
                to={'/'}>HOME</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-4 border-rose-200' : 'text-indigo-900 font-bold hover:text-indigo-700  ')}
                to={'/reviews'}>OPINIONS</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-4 border-rose-200' : ' font-bold text-indigo-900 hover:text-indigo-700  ')}
                to={'/analysis'}>ANALYSIS</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? ' text-rose-700 font-bold transition ease-in delay-50 border-b-4 border-rose-200' : 'text-indigo-900 font-bold hover:text-indigo-700  ')}
                to={'/about'}>ABOUT</NavLink>
        </div>
    );
};

export default Header;