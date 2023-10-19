import { useLoaderData } from "react-router-dom";
import Banner from "../Layout/Banner";
import BrandCards from "../Layout/BrandCards";
import TeamSection from "../Layout/TeamSection";
import ContentSection from "../Layout/ContentSection";


const Home = () => {
    const brandCards = useLoaderData()
    console.log(brandCards);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    brandCards.map(card => <BrandCards key={card.id} brandCards={brandCards} card = {card}></BrandCards>)
                }
            </div>
            <TeamSection></TeamSection>
            <ContentSection></ContentSection>
        </div>
    );
};

export default Home;