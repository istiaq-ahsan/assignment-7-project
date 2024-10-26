import { useEffect, useState } from "react";
import Players from "./Players";



const Allplayers = ({ handleIsActive, isActive }) => {

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
                    <button onClick={() => handleIsActive("about")} className={`${isActive.cart ? "btn" : "btn btn-active bg-yellow-400"}`}>Selected <span>0</span></button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-5 my-16 items-center justify-center ">
                {
                    products.map(product => <Players key={product.playerId} product={product}></Players>)
                }
            </div>

        </div>

    );
};

export default Allplayers;