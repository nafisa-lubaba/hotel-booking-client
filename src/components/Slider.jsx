import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from 'swiper/modules';


import 'swiper/css/autoplay'; 


const Slider = () => {
    return (
        <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[  Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        cssMode={true}
    >
        <SwiperSlide className="relative ">
            <div>
                <img className="w-full " src="https://i.ibb.co/HrCGtmB/banner1-1.png" />
            </div>
            <div className="absolute inset-0 flex flex-col text-center items-center justify-center bg-black bg-opacity-60 rounded-lg">
                <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:<span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay.</p>
                    <button className='btn btn-primary'></button>
                    
                </div>
               
            
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/nCdnpx3/banner-3-2.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/1mnPNZS/banner-4.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
              
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full " src="https://i.ibb.co/1ZFrH1k/banner-5.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/f2XYLYY/banner-6.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    );
};

export default Slider;