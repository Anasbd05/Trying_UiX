"use client"
import {supabase} from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect,useState} from 'react'

const Navbar = () => {

    const [UserData,setUserData] = useState('')

    const getUser = async () => {
        const {data,error} = await supabase.auth.getSession()
        if(error) {
            console.log(error)
        }
        if(data.session) {
            setUserData(data.session?.user.user_metadata)
        }
        console.log(UserData)
    }

    useEffect(() => {
        getUser()
    },[])

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
            {UserData !== "" ? <Image className='rounded-full p-1 bg-accent' src={UserData.avatar_url} alt='' height={40} width={40} /> :
                <Link href={"/login"}>
                    <button className='py-1 duration-500  bg-accent hover:shadow-[0px_3px_#000] px-5 rounded-full'>Sign In</button>
                </Link>
            }
        </nav>
    )
}

export default Navbar
