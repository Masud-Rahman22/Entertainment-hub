import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const PrdouctCards = ({ card, productDetails }) => {
    console.log(productDetails);
    console.log(card);
    // eslint-disable-next-line react/prop-types
    const { brandName, image, name, price, rating, shortDescription, type, _id } = card;
    return (
        <div>
            <div className="flex h-full w-full flex-col rounded-xl bg-clip-border text-gray-700 shadow-lg bg-black">
                <div className=" mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img className="h-[300px] w-full"
                        src={image}
                        alt="ui/ux review check"
                    />
                    <div className="inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6 flex-grow">
                    <div className="flex items-center justify-between mb-3">
                        <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-white">
                            {brandName}
                        </h5>
                        <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-orange-400">
                            {name}
                        </h5>

                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-white">
                        {shortDescription}
                    </p>
                    <div className="flex justify-between items-center mt-8 group">
                        <p className="text-orange-400 text-xl font-medium">price: {price}</p>
                        <span className="text-orange-400 text-xl font-medium">Rating: {rating}</span>
                        <p className="text-orange-400 text-xl font-medium">type: {type}</p>
                    </div>
                </div>
                <div className="p-6 pt-3 flex gap-3">
                    <Link to={`/details/${_id}`}>
                        <button className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true">Details</button>
                    </Link>
                    <Link to={`/updates/${_id}`}>
                        <button
                            className="block lg:ml-28 w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Update
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default PrdouctCards;