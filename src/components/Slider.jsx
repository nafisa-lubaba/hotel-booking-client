import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';


// import 'swiper/css/autoplay'; 


const Slider = () => {
    return (
        <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[ Navigation, Pagination, Mousewheel, Keyboard]}
        // autoplay={{
        //     delay: 2000,
        //     disableOnInteraction: false,
        // }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        cssMode={true}
    >
        <SwiperSlide className="relative mx-auto w-[90%]">
            <div>
                <img className="w-full " src="https://i.ibb.co/HrCGtmB/banner1-1.png" />
            </div>
            <div className="absolute inset-0 flex flex-col text-center items-center justify-center bg-black bg-opacity-40 rounded-lg">
                <h2 className="text-2xl lg:text-5xl pb-10 font-bold">j</h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold"></p>
                    
                </div>
               
            
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/nCdnpx3/banner-3-2.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Visit Turkmenistan With JourneyGenie</h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Explore the wonders of Central Asia from ancient cities to breathtaking landscapes, there's something for every traveler!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/1mnPNZS/banner-4.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Visit Kazakhstan With JourneyGenie </h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Explore the wonders of Central Asia from ancient cities to breathtaking landscapes, there's something for every traveler!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full " src="https://i.ibb.co/1ZFrH1k/banner-5.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Visit Mongolia With JourneyGenie </h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Explore the wonders of Central Asia from ancient cities to breathtaking landscapes, there's something for every traveler!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/f2XYLYY/banner-6.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Visit Kyrgyzstan With JourneyGenie</h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Explore the wonders of Central Asia from ancient cities to breathtaking landscapes, there's something for every traveler!</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    );
};

export default Slider;