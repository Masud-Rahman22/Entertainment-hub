

const Banner = () => {
    return (
        <div>
            <div className="hero md:min-h-screen object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/rft07c5/cinema04-05.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-left ml-3 md:ml-10">
                    <div className="lg:mb-80" data-aos="fade-up"
                        data-aos-duration="3000" data-aos-anchor-placement="top">
                        <h1 className="mb-5 text-3xl md:text-5xl md::text-5xl font-normal font-lobster  text-white"><span className="text-orange-300">DC Entertainment:</span> Your Gateway to Infinite Fun</h1>
                        <p className="md:w-2/5 mb-5 text-white text-base md:text-2xl leading-8 font-thin"> Dive into the ultimate hub of entertainment at DC Entertainment, where you will discover world of thrilling articles, captivating reviews, mind-bending quizzes, and exclusive interviews with your favorite artists and creators Join us for an unforgettable journey through the realms of entertainment, all in one place!</p>
                        <button className="btn bg-orange-400 text-white border-none mb-3">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

