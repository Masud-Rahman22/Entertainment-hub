import pic1 from '/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt.jpg'
import pic2 from '/man-plaid-shirt-bow-tie-studio.jpg'
import pic3 from '/handsome-man-home.jpg'

const TeamSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-xl lg:mt-20">Meet Us</p>
                <h1 className="text-white text-4xl font-semibold mt-5">Our Awesome Team</h1>
                <p className="text-white font-extralight mt-5">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</p>
                <button className="btn bg-orange-400 text-white border-none mt-5">Read More</button>
            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className='h-[100px] w-[200px] rounded-full' src={pic1} alt="" />
                <img className='h-[100px] w-[200px] rounded-full' src={pic2} alt="" />
                <img className='h-[100px] w-[200px] rounded-full' src={pic3} alt="" />
            </div>
        </div>
    );
};

export default TeamSection;