import React from 'react';
import Players from "./Players";
const AllPlayer = ({ products, handleSelectedPlayer }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 my-16 items-center justify-center ">
                {
                    products.map(product => <Players
                        handleSelectedPlayer={handleSelectedPlayer}
                        key={product.playerId}
                        product={product}

                    ></Players>

                    )
                }
            </div>
        </div>
    );
};

export default AllPlayer;