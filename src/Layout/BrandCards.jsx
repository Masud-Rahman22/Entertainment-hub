import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const BrandCards = ({ card, brandCards }) => {
    // eslint-disable-next-line react/prop-types
    const { name, image } = card;
    const [showProducts, setShowProducts] = useState([]);
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        const products = brandCards?.filter(card => (card.name) === name)
        setShowProducts(products)
    }, [brandCards, name])
    console.log(showProducts);
    const handleToShowProducts = (name) => {
        console.log(name);
        fetch(`http://localhost:5000/cards/${name}`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(showProducts)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        // eslint-disable-next-line react/prop-types
        <div onClick={()=>handleToShowProducts(showProducts.name)}>
            <div className="relative flex flex-col text-gray-700 bg-black shadow-md rounded-xl bg-clip-border m-10" data-aos="flip-left"
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
                            {name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCards;
