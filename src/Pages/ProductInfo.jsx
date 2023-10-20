import { useLoaderData } from "react-router-dom";
import PrdouctCards from "./PrdouctCards";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductInfo = () => {
    const productDetails = useLoaderData();
    return (
        <div>
            {
                productDetails.length === 0 ? 
                    <div className="flex justify-center items-center h-screen text-5xl font-bold text-orange-400">No Products Available</div> :
                    <div>
                        <div>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><img className="h-[500px] w-full" src={productDetails[4].imageSlider1} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="h-[500px] w-full" src={productDetails[4].imageSlider2} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="h-[500px] w-full" src={productDetails[4].imageSlider3} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
                            {
                                productDetails.slice(0, 4).map(card => <PrdouctCards key={card._id} card={card}></PrdouctCards>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductInfo;