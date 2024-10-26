import { useEffect, useState } from "react";
import AllPlayer from "./AllPlayer";
import Selected from "./Selected";



const Allplayers = ({ handleIsActive, isActive, handleSelectedPlayer, selectedPlayer, handleDelete }) => {


    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);



    return (
        <div className='container mx-auto my-16'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>{isActive.cart ? "Available Players" : (
                    <span>Selected Players (<span>{selectedPlayer.length}</span>/6)</span>
                )}</h2>
                <div>
                    <button onClick={() => handleIsActive("cart")} className={`${isActive.cart ? "btn btn-active shadow-none border bg-yellow-400 font-bold" : "btn shadow-none border"}`}>Available</button>
                    <button onClick={() => handleIsActive("about")} className={`${isActive.cart ? "btn border shadow-none" : "btn btn-active shadow-none border bg-yellow-400 font-bold"}`}>Selected<span>( {selectedPlayer.length} )</span></button>
                </div>
            </div>

            {
                isActive.cart ?
                    <AllPlayer
                        products={products}
                        handleSelectedPlayer={handleSelectedPlayer}
                    >

                    </AllPlayer> :
                    <Selected handleIsActive={handleIsActive} handleDelete={handleDelete} selectedPlayer={selectedPlayer}>
                    </Selected>
            }

        </div>

    );
};

export default Allplayers;