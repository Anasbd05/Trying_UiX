"use client"
import {LoaderCircle} from 'lucide-react'
import {supabase} from '../../lib/supabase'
import Image from 'next/image'
import React,{useState} from 'react'

const Login = () => {
    const [Email,setEmail] = useState('')
    const [Loading,setLoading] = useState(false)

    const loginGoogle = async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {error,data} = await supabase.auth.signInWithOAuth({
            provider: "google"
        })
        if(error) {
            console.log(error.message)
        }
    }

    const MagicLink = async () => {
        try {
            setLoading(true)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {error,data} = await supabase.auth.signInWithOtp({
                email: Email
            })
            if(error) {
                console.log(error.message)
            }
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
            setEmail("")
        }
    }
    return (
        <div className="h-screen  flex justify-center items-center">
            <div className="flex bg-white shadow-md rounded-md flex-col  w-4/5 p-10 md:w-3/5 lg:w-2/5 mx-auto">
                <div className='flex gap-2 w-full flex-col'>
                    <label className='font-bold'>Email</label>
                    <input value={Email} onChange={(e) => setEmail(e.target.value)} autoFocus type="text" className='py-2 px-3 outline-none border-2 border-accent rounded-lg' placeholder='mail@gmail.com' />
                    <button onClick={MagicLink} className='py-3 w-full my-2 flex items-center justify-center hover:opacity-80 bg-black text-white rounded-lg'>
                        {
                            Loading ?
                                <span className="loading loading-bars loading-md"></span>
                                : "Send MagicLink"
                        }
                    </button>
                </div>

                <div className="divider divider-neutral font-semibold">OR</div>
                <button onClick={loginGoogle} className='border-2 hover:bg-gray-100 duration-500 py-2 border-black items-center justify-center flex gap-5'>
                    <Image src={"/google.png"} alt='' height={26} width={26} />
                    Continue with google
                </button>
            </div>
        </div>
    )
}

export default Login
