// import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const BrandCards = ({ card }) => {
    // eslint-disable-next-line react/prop-types
    const { brandName, image } = card;

    return (
        // eslint-disable-next-line react/prop-types
        <div>
            <Link to={`/cards/${brandName}`} className="relative flex flex-col text-gray-700 bg-black shadow-md rounded-xl bg-clip-border m-10" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="text-center mb-2">
                        <p className="text-white text-4xl font-bold">
                            {brandName}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCards;
