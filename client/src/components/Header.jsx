import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <header className='bg-green-50 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to={'/'}>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-green-400'>Saahu</span>
                <span className='text-green-800'>Estate</span>
            </h1>
            </Link>
            <form  className='bg-green-100 p-3 rounded-lg flex items-center' >
                <input type="text" name="" id="" placeholder='Search...'className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-green-600'/>
            </form>
            <ul className='flex gap-4'>
                <Link to={'/'}>
                <l1 className='hidden sm:inline text-green-900 hover:underline'>Home</l1>
                </Link>
                <Link to={'/about'}>
                <l1 className='hidden sm:inline text-green-900 hover:underline'>About</l1>
                </Link>
                <Link to={'/sign-in'}>
                <l1 className='text-green-900 hover:underline'>Sign In</l1>
                </Link>
            </ul>
            </div>
      </header>

    </div>
  )
}
