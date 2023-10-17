

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/3BC0DDD/group-diverse-friends-holding-movie-emoticons-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold  text-white"><span className="text-orange-400">EpicEntertainia:</span> Your Gateway to Infinite Fun</h1>
                        <p className="mb-5 border-2 text-white font-semibold text-xl"> Dive into the ultimate hub of entertainment at EpicEntertainia, where you will discover a world of thrilling articles, captivating reviews, mind-bending quizzes, and exclusive interviews with your favorite artists and creators Join us for an unforgettable journey through the realms of entertainment, all in one place!</p>
                        <button className="btn bg-orange-400 text-white border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;