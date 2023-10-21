import swal from "sweetalert";


// eslint-disable-next-line react/prop-types
const CartDetails = ({ cart, setNewCart, newCart }) => {

    // eslint-disable-next-line react/prop-types
    const { brandName, image, name, shortDescription, _id } = cart
    const handleToDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://brand-shop-server-flame-alpha.vercel.app/carts/${_id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(cart)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your file has been deleted!", {
                                    icon: "success",
                                });
                            }
                            // eslint-disable-next-line react/prop-types
                            const remaining = newCart.filter(carts => carts._id !== _id)
                            setNewCart(remaining);
                        })
                } else {
                    swal("Your file is safe!");
                }
            });

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
                        <button onClick={() => handleToDelete(_id)} className="btn bg-orange-400 text-white">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;