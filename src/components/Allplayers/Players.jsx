import React from 'react';

const Players = ({ product, handleSelectedPlayer, handleDeletePrice }) => {



    const { playerId, name, country, image, role, battingType, bowlingType, biddingPrice } = product

    return (
        <div className=''>
            <div className="card bg-base-100 w-full border">
                <figure>
                    <img
                        src={image}
                        alt="player" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-3'>
                        <i className="fa-solid fa-user text-2xl rounded-full"></i>
                        <h2 className="card-title">{name}</h2>
                    </div>

                    <div className='flex justify-between mb-2'>
                        <div className='flex items-center gap-3'>
                            <i className="fa-solid fa-flag text-gray-500 text-xl"></i>
                            <h3 className='text-base'>{country}</h3>
                        </div>
                        <div className='bg-gray-200 px-4 py-2'>
                            <h3 className='text-base'>{role}</h3>
                        </div>

                    </div>
                    <div className='border-b'></div>
                    <h3 className='text-base font-bold'>Rating</h3>
                    <div className='flex justify-between text-base font-semibold'>
                        <h3>{battingType}</h3>
                        <h3>{bowlingType}</h3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-semibold'>Price: $ {biddingPrice}</h3>
                        <button onClick={() => handleSelectedPlayer(product)} className='btn btn-actions'>Choose Player</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Players;