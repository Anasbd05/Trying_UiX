import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between shadow-md  bg-white items-center px-10 mx-14 rounded-full py-2 '>
            <Image
                src="/logo.jpg"
                alt="Logo"
                width={50}
                height={50} // Ensure both width and height are defined
                style={{
                    width: "auto",
                    height: "auto",
                    borderRadius: "10px"
                }} // Maintain aspect ratio
            />
            <ul className='hidden md:flex gap-6 items-center'>
                <Link className='font-Ibm-sans  duration-300 hover:py-1 hover:px-3 hover:bg-gray-200 rounded-lg ' href={"#features"}>Features</Link>
                <Link className='font-Ibm-sans duration-300  hover:py-1 hover:px-3 hover:bg-gray-200 rounded-lg ' href={"#pricing"}>Pricing</Link>
                <Link className='font-Ibm-sans  duration-300 hover:py-1 hover:px-3 hover:bg-gray-200 rounded-lg ' href={"#faqs"}>Faqs</Link>
            </ul>
            <Link href={"/login"}>
                <button className='py-1 duration-500  bg-accent hover:shadow-[0px_3px_#000] px-5 rounded-full'>Sign In</button>
            </Link>
        </nav>
    )
}

export default Navbar
