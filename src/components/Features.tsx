import React from 'react';
import {features} from "../data"

const Features = () => {
    return (
        <div className='py-16 sm:py-20 px-10 sm:px-5 '>
            <div className="w-[85%] mx-auto">
                <div className='items-center flex flex-col'>
                    <h1 className='leading-tight font-semibold text-center tracking-tight font-Ibm-sans text-4xl sm:text-5xl lg:text-6xl'>
                        What we offer
                    </h1>
                    <p className='text-text text-lg leading-relaxed text-center'>All in One</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 my-4 md:grid-cols-3 w-full justify-center gap-5">
                    {features.map((feature,index) => (
                        <div className='flex bg-primary/60 duration-500 p-5 rounded-lg hover:scale-105 hover:shadow-[4px_4px_#000] flex-col gap-2' key={index}>
                            <h1 className='font-bold text-xl mb-3 font-Ibm-sans leading-none tracking-tight'>{feature.title}</h1>
                            <p className='text-text leading-relaxed font-medium'>{feature.description}</p> {/* Fixed this line */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
