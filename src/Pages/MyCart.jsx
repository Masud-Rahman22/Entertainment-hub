import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";
import { useState } from "react";


const MyCart = () => {
    const cartInfo = useLoaderData();
    console.log(cartInfo);
    const [newCart, setNewCart] = useState(cartInfo)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:my-10">
            {
                newCart.length > 0 ? newCart.map(cart => <CartDetails key={cart._id} newCart={newCart} setNewCart= {setNewCart} cartInfo={cartInfo} cart={cart}></CartDetails>)
                :
                <div className="text-orange-400 text-4xl font-bold h-[100vh] w-full flex items-center justify-center md:ml-96"><p>No Items Added</p></div>
            }
        </div>
    );
};

export default MyCart;