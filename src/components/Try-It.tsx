import React from 'react'

const TryIt = () => {
    return (
        <main className='py-16 bg-primary/80 sm:py-20 px-10 sm:px-5'>
            <div className='md:w-4/5 mx-auto '>
                <div className="flex flex-col gap-2 items-center">
                    <h1 className='leading-tight font-semibold text-center tracking-tight font-Ibm-sans text-4xl sm:text-5xl lg:text-6xl'>Experience It</h1>
                    <small className='text-text font-bold'>Simple & Fast AI Image Processing</small>
                </div>
                <div className='flex flex-col'>
                    <div className="flex mt-6 justify-between md:w-3/5 mx-auto px-4 py-1 rounded-lg bg-white shadow-md items-center">
                        <input className='outline-none w-full ' placeholder='Prompt...' type="text" />
                        <button className='bg-primary py-1 duration-300  px-5 hover:shadow-[0px_3px_#000] rounded-lg'>Generate</button>
                    </div>
                    {/* styles */}
                </div>

            </div>
        </main>
    )
}

export default TryIt
