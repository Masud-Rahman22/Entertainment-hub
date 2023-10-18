import pic1 from '/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt.jpg'
import pic2 from '/man-plaid-shirt-bow-tie-studio.jpg'
import pic3 from '/handsome-man-home.jpg'

const TeamSection = () => {
    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-2xl lg:mt-20">Meet Us</p>
                <h1 className="text-orange-400 text-5xl font-semibold mt-5">Our Awesome Team</h1>
                <p className="text-white font-extralight text-lg mt-5 lg:w-3/4 text-center">Meet the creative minds behind our spectacular entertainment website. Our team is a diverse blend of passionate individuals who live and breathe all things entertainment. From dedicated writers who craft engaging articles and reviews to tech-savvy wizards who ensure our platform runs seamlessly, we are a dynamic ensemble. Our talented designers bring visuals to life, while our video production experts deliver captivating content. Editors with a keen eye for detail and social media mavens keep you up-to-date and engaged. Together, we form a harmonious symphony, working tirelessly to bring you the latest news, insightful features, and unforgettable experiences from the world of entertainment.</p>
                <button className="btn btn-outline border-white text-white mt-5 hover:bg-orange-400">Read More</button>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly items-center mt-10'>
                <div className="relative flex flex-col text-gray-700 bg-black shadow-md lg:w-60 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-52 rounded-full">
                        <img src={pic2} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Adam Anderson
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-orange-400 bg-clip-text">
                            CEO
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col text-gray-700 bg-black shadow-md lg:w-60 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-52 rounded-full bg-clip-border">
                        <img src={pic3} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Abel tesfaye
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-orange-400 bg-clip-text">
                            Visual Effects Artist
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col text-gray-700 bg-black shadow-md lg:w-60 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-52 rounded-full bg-clip-border">
                        <img src={pic1} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Jhon Davidson
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-orange-400 bg-clip-text">
                            Editor
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;