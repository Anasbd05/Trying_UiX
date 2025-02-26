"use client";

import Image from 'next/image';
import React,{useState} from 'react';

const TryIt = () => {
    const [style,setStyle] = useState("Realistic");
    const [image,setImage] = useState("/pic.jpg");
    const [prompt,setPrompt] = useState('');

    const HandleGenerateImage = async () => {
        // Your image generation logic
    };
    return (
        <div className='py-16 bg-primary sm:py-20 px-10 sm:px-5'>
            <div className='md:w-4/5 mx-auto'>
                <div className="flex flex-col gap-2 items-center">
                    <h1 className='leading-tight font-semibold text-center tracking-tight font-Ibm-sans text-4xl sm:text-5xl lg:text-6xl'>
                        Experience It
                    </h1>
                    <small className='text-text font-bold'>Simple & Fast AI Image Processing</small>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="flex mt-6 justify-between md:w-3/5 mx-auto px-4 py-1 rounded-lg bg-white shadow-md items-center">
                        <input
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className='outline-none w-full'
                            placeholder='Prompt...'
                            type="text"
                        />
                        <button onClick={HandleGenerateImage} className='bg-primary py-1 duration-300 px-5 hover:shadow-[0px_3px_#000] rounded-lg'>
                            Generate
                        </button>
                    </div>
                    <div className='flex gap-2 flex-wrap items-center justify-center mt-3'>
                        <button onClick={() => setStyle("Realistic")} className={`py-2 px-4 bg-accent2   font-semibold hover:scale-105 duration-300  rounded-lg ${style === "Realistic" && "bg-black text-white"}`}>Realistic</button>
                        <button onClick={() => setStyle("Anime")} className={`py-2 px-4 bg-accent2  font-semibold hover:scale-105 duration-300   rounded-lg ${style === "Anime" && "bg-black text-white"}`}>Anime</button>
                        <button onClick={() => setStyle("Minimalist")} className={`py-2 px-4 bg-accent2 font-semibold hover:scale-105 duration-300   rounded-lg ${style === "Minimalist" && "bg-black text-white"}`}>Minimalist</button>
                        <button onClick={() => setStyle("CyberPunk")} className={`py-2 px-4 bg-accent2 font-semibold hover:scale-105 duration-300   rounded-lg ${style === "CyberPunk" && "bg-black text-white"}`}>CyberPunk</button>
                        <button onClick={() => setStyle("Carton")} className={`py-2 px-4 bg-accent2  font-semibold hover:scale-105 duration-300  rounded-lg ${style === "Carton" && "bg-black text-white"}`}>Carton</button>
                        <button onClick={() => setStyle("Scifi")} className={`py-2 px-4 bg-accent2  font-semibold hover:scale-105  duration-300 rounded-lg ${style === "Scifi" && "bg-black text-white"}`}>Sci-fi</button>
                    </div>
                    <div className='mt-6'>
                        <Image src={image} className='rounded-lg blur-sm hover:blur-none' alt='' height={500} width={500} />
                        <button className='py-2 px-8 duration-300 bg-accent2 font-bold rounded-lg mt-2 hover:shadow-[0px_4px_#000] '>
                            <a download={true} href={image} >Download</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryIt;
