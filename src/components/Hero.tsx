import {Clock10} from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <main className='py-16 sm:py-20 px-10 sm:px-5 '>
            <div className="flex flex-col md:w-3/5 mx-auto md:items-center ">
                <div className='py-1 bg-black mb-6  gap-5 flex items-center  justify-center text-white rounded-full w-4/5 md:w-3/5 mx-auto px-4 '>
                    <p className='tracking-wider '>Hurry Up! limited Offer</p>
                    <Clock10 className='w-4 h-4 text-accent animate-pulse' />
                </div>
                <div className='gap-3 flex flex-col  items-center'>
                    <h1 className='leading-tight font-semibold  text-center tracking-tight font-Ibm-sans text-4xl sm:text-5xl lg:text-6xl'>Transform Images Instantly with AI <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Instantly & Effortlessly</span></h1>
                    <p className='text-text text-lg leading-relaxed text-center max-w-2xl'>Turn any image into a masterpiece with advanced AI. Enhance quality, apply creative effects, remove objects, and more—all in just a few clicks. No design skills needed!</p>
                    <button className='py-2 px-5 text-center bg-accent hover:opacity-80 rounded-lg duration-300 font-semibold'>Get Started Now</button>
                </div>
            </div>
        </main>
    )
}

export default Hero
