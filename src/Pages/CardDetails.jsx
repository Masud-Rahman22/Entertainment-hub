import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const details = useLoaderData();
    const {brandName,image,name,price,rating,shortDescription,type,_id} = details;
    const handleToAdd = (_id)=>{
        fetch('')
    }
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md bg-black mx-auto my-10">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
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
                    <button onClick={()=>handleToAdd(_id)} className="btn bg-orange-400 w-full text-white mt-5">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;