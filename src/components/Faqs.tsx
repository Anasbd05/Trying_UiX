import faqs from '@/data'
import React from 'react'

const Faqs = () => {
    return (
        <div id='faqs' className='py-16 sm:py-20 px-10 sm:px-5 '>
            <h1 className='text-center font-Ibm-sans font-bold mb-6 text-accent'>FAQS</h1>
            <div className="flex gap-2 ">
                <h1 className='text-neutral-800 contrast-75 w-8/12 font-bold text-3xl sm:text-4xl md:text-5xl'>Frequently Asked Questions</h1>
                <div className='w-6/12'>
                    {faqs.map((faq) => (
                        <div key={faq.id} className="collapse border-b border-gray-200 rounded-none collapse-arrow bg-transparent">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-semibold">{faq.question}</div>
                            <div className="collapse-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Faqs
