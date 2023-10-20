import pic1 from '/58251.jpg'
import pic2 from '/2247132.jpg'
import pic3 from '/4678088.jpg'
import pic4 from '/5640864.jpg'

const ContentSection = () => {
    return (
        <div>
            <h1 className='text-orange-400 text-center font-medium text-5xl mt-10 font-lobster'>Amp Up Your Entertainment</h1>
            <p className='text-lg font-thin text-center lg:w-3/4 mx-auto mt-5'>Delve into the captivating journey of the entertainment industry with Entertainment History Chronicles. Explore iconic moments, legendary figures, and milestones that have shaped the world of entertainment. Uncover the stories behind the scenes, from classic Hollywood to modern music, as we celebrate the magic of showbiz rich past.</p>
            <div className="mt-16 hero bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={pic1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-orange-400">Sneak Peek: Entertainment Hottest Upcoming Releases</h1>
                        <p className="py-6 text-xl font-thin">Get ready to dive into the future of entertainment with our exclusive Sneak Peek: Entertainment Hottest Upcoming Releases section. Discover a treasure trove of forthcoming blockbuster movies, highly anticipated music albums, thrilling video game launches, and star-studded events, all in one place. We offer a front-row seat to the most exciting upcoming releases in the entertainment industry. Watch trailers, read about the creative minds behind the projects, and mark your calendars for the release dates. From the silver screen to your headphones and gaming consoles, we have got you covered with the latest and greatest on the horizon. Stay ahead of the curve and be the first to know about what is next in entertainment!</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 hero bg-black">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={pic2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-orange-400">ScreenTalks: Dive into the World of Entertainment</h1>
                        <p className="py-6 text-xl font-thin">Welcome to ScreenTalks, your one-stop destination for all things entertainment! Our video content section is a treasure trove of cinematic delights and showbiz revelations. Join us as we go behind the scenes of your favorite movies and TV shows, bringing you exclusive interviews with A-list actors, renowned directors, and talented creatives. Discover the latest film reviews, TV series recaps, and insightful critiques that will guide your viewing choices. Tune in for lively discussions, fan theories, and in-depth analysis of pop culture phenomena. Whether you are a film buff, TV addict, or music enthusiast, ScreenTalks has something for everyone. Subscribe, hit the notification bell, and get ready to embark on an exciting journey through the entertainment universe.</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 hero bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={pic3} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-orange-400">Listen In: Entertainment Podcasts</h1>
                        <p className="py-6 text-xl font-thin">Welcome to our podcast corner, where we bring the world of entertainment directly to your ears. Tune in to discover the magic behind your favorite movies, TV shows, music, and more. Our hosts delve into engaging conversations with industry insiders, celebrities, and experts, offering exclusive insights into their creative journeys and the latest industry trends. From in-depth film analysis to candid artist interviews, we have got your entertainment cravings covered. Whether you are a cinephile, music enthusiast, or simply looking for some behind-the-scenes scoop, our podcasts are your gateway to all things entertainment. Stay plugged in for weekly episodes that entertain, enlighten, and inspire.</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 hero bg-black">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={pic4} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-orange-400">Entertainment Extravaganza: Win Big with Our Contests and Giveaways!</h1>
                        <p className="py-6 text-xl font-thin">Welcome to our Entertainment Extravaganza, where you can unlock incredible opportunities to win big in the world of entertainment! Join the excitement as we offer a wide array of captivating contests and thrilling giveaways. From exclusive movie premiere tickets to autographed memorabilia, VIP concert experiences, and more, our contests will keep you on the edge of your seat. Get ready to test your knowledge with trivia quizzes, participate in creative challenges, and engage with fellow entertainment enthusiasts for a chance to claim fantastic prizes. Stay tuned, participate, and let your passion for entertainment lead you to unforgettable experiences! Do not miss out on your shot at the spotlight in our Entertainment Extravaganza.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;