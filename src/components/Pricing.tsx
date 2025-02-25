import {pricing} from '@/data'
import {Check} from 'lucide-react'
import React from 'react'

const Pricing = () => {
    return (
        <div className='py-16 sm:py-20 px-10 sm:px-5 '>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 w-[85%] mx-auto">
                {
                    pricing.map((price) => (
                        <div className='p-5 bg-primary/70 flex gap-2 flex-col justify-between rounded-lg md:h-[400px] ' key={price.id}>
                            <div className='border-b-2 flex flex-col gap-2 border-gray-200 py-4 mb-6'>
                                <h1 className='text-3xl md:text-4xl  font-bold font-mono'>{price.price}</h1>
                                <h3 className='text-lg font-Ibm-sans font-semibold'>{price.title}</h3>
                            </div>
                            <ul className='flex flex-col gap-3'>
                                {price.features.map((feature) => (
                                    <li className='flex gap-5 mx-6' key={price.id}>
                                        <Check className='text-green-500' />
                                        <p className='font-bold tracking-wider'>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <button className='py-2 w-5/6 mx-auto bg-black text-white rounded-lg hover:opacity-80'>Choose Plan</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pricing
