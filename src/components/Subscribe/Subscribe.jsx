import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (

        <div className="w-3/4 mx-auto border p-4 rounded-xl bg-transparent">
            <div className='front-box flex flex-col text-center space-y-10  mx-auto '>
                <h1 className='text-2xl md:text-3xl mt-16 font-bold text-black'>Subscribe to our Newsletter</h1>
                <h3 className='text-base md:text-2xl font-medium text-black'>Get the latest updates and news in your inbox !</h3>
                <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-4/5 md:w-full max-w-xs" />
                    <button className="btn btn-actions">Subscribe</button>
                </div>
                <br />
                <br />
            </div>
        </div>

    );
};

export default Subscribe;