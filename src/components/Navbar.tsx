import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between shadow-md bg-white items-center px-10 my-6 mx-14 rounded-full py-2 '>
            <Image alt='logo' src={"/logo.jpg"} className='rounded-lg' height={50} width={50} />
            <ul className='hidden md:flex gap-6 items-center'>
                <Link className='font-Ibm-sans  duration-300 hover:py-1 hover:px-3 hover:bg-gray-200 rounded-lg ' href={"/"}>Features</Link>
                <Link className='font-Ibm-sans duration-300  hover:py-1 hover:px-3 hover:bg-gray-200 rounded-lg ' href={"/"}>Pricing</Link>
                <Link className='font-Ibm-sans  duration-300 hover:py-1 hover:px-3 hover:bg-gray-200 rounded-lg ' href={"/"}>Faqs</Link>
            </ul>
            <button className='py-1 duration-500  bg-accent hover:shadow-[0px_3px_#000] px-5 rounded-full '>Sign In</button>
        </nav>
    )
}

export default Navbar
