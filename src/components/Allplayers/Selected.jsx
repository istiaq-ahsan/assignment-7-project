import React from 'react';

const Selected = ({ selectedPlayer, handleDelete }) => {
    console.log(handleDelete);
    return (
        <div className='my-16'>
            {
                selectedPlayer.map((player) => (
                    <div className='border border-gray-500 p-4 rounded-xl mb-5'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4 items-center'>
                                <img className='w-28 h-24' src={player.image} alt="" />
                                <div>
                                    <h3 className='text-lg font-medium'>{player.name}</h3>
                                    <h4 className='text-base'>
                                        {
                                            player.role == "Batsman" ? player.battingType : player.bowlingType
                                        }
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(player.playerId)}><i className="fa-regular fa-trash-can text-xl"></i></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Selected;