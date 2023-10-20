import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";


const MyCart = () => {
    const cartInfo = useLoaderData();
    console.log(cartInfo);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:my-10">
            {
                cartInfo.map(cart => <CartDetails key={cart._id} cartInfo={cartInfo} cart={cart}></CartDetails>)
            }
        </div>
    );
};

export default MyCart;