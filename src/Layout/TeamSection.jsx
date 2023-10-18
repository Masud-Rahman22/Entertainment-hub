import pic1 from '/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt.jpg'
import pic2 from '/man-plaid-shirt-bow-tie-studio.jpg'
import pic3 from '/handsome-man-home.jpg'

const TeamSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-2xl lg:mt-20">Meet Us</p>
                <h1 className="text-white text-5xl font-semibold mt-5">Our Awesome Team</h1>
                <p className="text-white font-extralight text-lg mt-5 lg:w-3/4 text-center">Meet the creative minds behind our spectacular entertainment website. Our team is a diverse blend of passionate individuals who live and breathe all things entertainment. From dedicated writers who craft engaging articles and reviews to tech-savvy wizards who ensure our platform runs seamlessly, we are a dynamic ensemble. Our talented designers bring visuals to life, while our video production experts deliver captivating content. Editors with a keen eye for detail and social media mavens keep you up-to-date and engaged. Together, we form a harmonious symphony, working tirelessly to bring you the latest news, insightful features, and unforgettable experiences from the world of entertainment.</p>
                <button className="btn btn-outline border-white text-white mt-5 hover:bg-orange-400">Read More</button>
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