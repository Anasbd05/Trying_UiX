import {pricing} from '@/data'
import {Check} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Pricing = () => {
    return (
        <div id='pricing' className='py-16 sm:py-20 px-10 sm:px-5 '>
            <div className="flex flex-col gap-2 mb-5 items-center">
                <h1 className='leading-tight font-semibold text-center tracking-tight font-Ibm-sans text-4xl sm:text-5xl lg:text-6xl'>
                    Choose Your Plan
                </h1>
                <small className='text-text font-bold'>Flexible pricing to suit your needs. Get started with the perfect plan for you.</small>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 w-[75%] mx-auto">
                {
                    pricing.map((price) => (
                        <div className='p-5 bg-white shadow-[3px_3px_#000] duration-300 hover:shadow-[5px_5px_#000] flex gap-2 flex-col justify-between rounded-xl  ' key={price.title}>
                            <div className='border-b-2 flex flex-col gap-2 border-gray-200 py-4 mb-6'>
                                <div className="flex gap-2 justify-between items-center">
                                    <h1 className='text-3xl md:text-4xl  font-bold font-mono'>{price.price}</h1>
                                    {price.id === 2 && <p className='text-sm bg-gray-200 rounded-full py-1 px-4 text-text font-bold text-center'>Pay once then it&#39;s yours forever</p>}
                                </div>

                                <h3 className='text-lg font-semibold'>{price.title}</h3>
                                <p className='text-sm'>{price.description}</p>
                            </div>
                            <ul className='flex flex-col gap-3'>
                                {price.features.map((feature,index) => (
                                    <li className='flex gap-5 mx-6' key={`${price.id}-${index}`}>
                                        <Check className='text-accent' />
                                        <p className='font-bold tracking-wider'>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link href={price.url}>
                                <button className='py-2 w-full bg-accent rounded-lg mt-4 hover:opacity-80'>Choose Plan</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pricing
