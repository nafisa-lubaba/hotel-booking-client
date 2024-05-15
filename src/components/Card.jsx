import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


const Card = ({ card }) => {
    useEffect(() => {
        Aos.init();

    }, [])


    const { _id, room_id, room_images, title, room_description, availability, category, rating, price_per_night } = card
    return (
        <div className=" bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%">
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                <img className='rounded-xl px-5 pt-5' src={room_images} alt={`image for the recipe_name
 ${title}`} />

                <div className="w-56 -mt-10 overflow-hidden   bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%" data-aos="fade-down-right " >
                    <h3 className="py-2 font-bold tracking-wide text-center text-[#158260] uppercase dark:text-white">{title}</h3>
                    <h3 className="py-2 px-2  text-gray-600 dark:text-white">{room_description}</h3>

                    <div className=" flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        {/* <span className="font-bold text-gray-800 dark:text-gray-200">${price_per_night}</span> */}
                        <Link to={`/rooms/${card._id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform  bg-[#158260] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" data-aos="zoom-in">Book Now</Link>
                    </div>
                </div>
            </div>




        </div>



    );
};

export default Card;