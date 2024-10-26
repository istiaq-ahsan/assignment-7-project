import { useEffect, useState } from "react";
import AllPlayer from "./AllPlayer";
import Selected from "./Selected";



const Allplayers = ({ handleIsActive, isActive, handleSelectedPlayer, selectedPlayer, handleDelete }) => {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('../../../public/players.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container mx-auto my-16'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>Available Players</h2>
                <div>
                    <button onClick={() => handleIsActive("cart")} className={`${isActive.cart ? "btn btn-active bg-yellow-400" : "btn"}`}>Available</button>
                    <button onClick={() => handleIsActive("about")} className={`${isActive.cart ? "btn" : "btn btn-active bg-yellow-400"}`}>Selected <span>{selectedPlayer.length}</span></button>
                </div>
            </div>

            {
                isActive.cart ?
                    <AllPlayer
                        products={products}
                        handleSelectedPlayer={handleSelectedPlayer}>

                    </AllPlayer> :
                    <Selected handleDelete={handleDelete} selectedPlayer={selectedPlayer}>
                    </Selected>
            }

        </div>

    );
};

export default Allplayers;