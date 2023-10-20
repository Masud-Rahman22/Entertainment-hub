import { useState } from "react";
import { useLoaderData } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CartDetails = ({ cart,cartInfo }) => {
    const [newCart,setNewCart] = useState(cartInfo)
    // eslint-disable-next-line react/prop-types
    const { brandName, image, name, shortDescription,_id} = cart
    const handleToDelete = (_id)=>{
        fetch(`http://localhost:5000/carts/${_id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = newCart.filter(carts => carts._id !== _id)
            setNewCart(remaining);
        })
    }
    return (
        <div>
            <div className="card md:h-[500px] md:w-[600px] mx-auto bg-black shadow-xl">
                <figure><img src={image} className="object-cover" alt="Shoes" /></figure>
                <div>
                    <h2 className="card-title mt-5 text-orange-400 text-3xl font-semibold">{brandName}</h2>
                    <h2 className="card-title mt-5 text-orange-400 text-2xl font-medium">{name}</h2>
                    <p className="mt-5">{shortDescription}</p>
                    <div className="card-actions justify-start my-5">
                        <button onClick={()=>handleToDelete(_id)} className="btn bg-orange-400 text-white">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;