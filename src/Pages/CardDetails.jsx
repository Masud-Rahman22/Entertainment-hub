import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const CardDetails = () => {
    const details = useLoaderData();
    const {brandName,image,name,price,rating,shortDescription,type} = details;
    const detailedInfo = {
        brandName,image,name,price,rating,shortDescription,type
    }
    const handleToAddInCart =()=>{
        fetch('https://brand-shop-server-flame-alpha.vercel.app/carts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(detailedInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal("Great", "You Added this to your cart", "success");
            }
        })
    }
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-col md:flex-row rounded-xl bg-clip-border text-gray-700 shadow-md bg-black mx-auto my-10">
                <div className="relative md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        alt="image"
                        className="object-center w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans antialiased font-semibold leading-relaxed tracking-normal text-3xl uppercase text-orange-400">
                        {brandName}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                        {name}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
                        {shortDescription}
                    </p>
                    <span className="text-orange-400 text-xl font-semibold mr-10">Price: {price}</span>
                    <span className="text-orange-400 text-xl font-semibold mr-10">Rating: {rating}</span>
                    <span className="text-orange-400 text-xl font-semibold">Type: {type}</span>
                    <button onClick={handleToAddInCart} className="btn bg-orange-400 w-full text-white mt-5">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;