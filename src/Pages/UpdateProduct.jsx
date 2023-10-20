import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const UpdateProduct = () => {
    const updateDetails = useLoaderData();
    const { brandName, image, name, price, rating, shortDescription, type, _id } = updateDetails
    console.log(updateDetails);
    const handleUpdateButton = (e) => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        // const form = new FormData(e.currentTarget);
        // const rating = form.get('photo');
        // const name = form.get('name');
        // const brandName = form.get('brandName');
        // const type = form.get('type');
        // const price = form.get('price');
        // const shortDescription = form.get('shortDescription');
        // const rating = form.get('rating');
        const updateInfo = {
            image, name, brandName, type, price, shortDescription, rating
        }
        console.log(updateInfo);
        fetch(`http://localhost:5000/updates/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Well Done!", "You updated the information!", "success");
                }

            })
    }
    return (
        <div>
            <div className=" bg-black mt-4 px-16 py-10">
                <h1 className="text-4xl font-semibold text-center rancho">Update Products</h1>



                <div className="mt-9 bg-black">
                    <form onSubmit={handleUpdateButton} >
                        <div className="md:flex">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                                <input type="text" name="brandName" defaultValue={brandName} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brand name" required />
                            </div>
                        </div>
                        <div className="md:flex mt-4">
                            <div className="w-1/2 mr-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" defaultValue={name} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Name " required />
                            </div>

                            <div className="w-1/2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                <input type="text" name="type" defaultValue={type} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type of  " required />
                            </div>
                        </div>
                        <div className="md:flex mt-4">
                            <div className="w-1/2 mr-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" defaultValue={price} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter price " required />
                            </div>

                            <div className="w-1/2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                                <input type="number" name="rating" defaultValue={rating} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" required />
                            </div>
                        </div>
                        <div className="md:flex mt-4">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                                <input type="text" name="shortDescription" defaultValue={shortDescription} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description " required />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                            <input type="text" name="image" defaultValue={image} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                        </div>

                        <input type="submit" value='update product' className="text-white w-full mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;