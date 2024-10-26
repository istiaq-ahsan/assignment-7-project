import React from 'react';
import './Banner.css'

const Banner = ({ handleIncreasePrice }) => {
    return (
        <div className='container mx-auto'>
            <div className='front flex flex-col justify-center items-center text-center gap-5 mx-auto'>
                <img className='mt-12' src="../../../image/banner-main.png" alt="" />
                <h1 className='text-3xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-2xl font-medium text-gray-200'>Beyond Boundaries Beyond Limits</h3>
                <div>
                    <button onClick={() => handleIncreasePrice(5000000)} className='btn font-bold text-base mb-12 bg-yellow-400 outline outline-offset-4 outline-yellow-600'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;