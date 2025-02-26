import React from 'react';
import {features} from "../data"

const Features = () => {
    return (
        <div id='features' className='py-16 sm:py-20 px-10 sm:px-5 '>
            <div className="w-[85%] mx-auto">
                <div className='items-center flex flex-col'>
                    <h1 className='leading-tight font-semibold  text-center tracking-tight font-Ibm-sans text-4xl sm:text-5xl lg:text-6xl'>
                        Powerful Features, Seamless <br /> <span className='bg-gradient-to-r from-accent  to-primary bg-clip-text text-transparent '>Experience</span>
                    </h1>
                    <p className='text-text max-w-2xl text-lg leading-relaxed text-center'>Unlock a suite of features designed to enhance your workflow and maximize efficiency.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 my-4 md:grid-cols-3 w-full justify-center gap-5">
                    {features.map((feature) => (
                        <div key={feature.id} className='flex bg-primary/60 shadow-md duration-500 p-5 rounded-lg hover:scale-105 hover:shadow-[4px_4px_#000] flex-col gap-2'>
                            {feature.icon}
                            <h1 className='font-bold text-xl my-3 font-Ibm-sans leading-none tracking-tight'>{feature.title}</h1>
                            <p className='text-text leading-relaxed text-justify font-medium'>{feature.description}</p> {/* Fixed this line */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
