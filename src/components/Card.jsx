import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { CiLocationOn } from "react-icons/ci";
import { RiPriceTag2Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";


const Card = ({ card }) => {
    useEffect(() => {
        Aos.init();

    }, [])


    const { _id, room_id, room_images, title, room_description, availability, category, rating, price_per_night } = card


    const cardStyle = {
        backgroundImage: `url(${room_images})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    
    return (

        <div className="card mb-10" style={cardStyle}>

            <div className="card-details p-5" >
                <div className="hero-overlay bg-opacity-10 rounded-lg">
                    <div  className="pt-40 px-5">
                      
                        <h2 className="text-2xl text-white font-bold">{title}</h2>
                    </div>
                    <div className="bottom flex items-center justify-between px-1">
                        <div data-aos="fade-up-right" data-aos-duration="3000">
                            <div className="flex items-center gap-2">
                                <CiLocationOn className="text-white" />
                                <h6 className="text-xl text-white">{room_description}</h6>
                            </div>
                            <div className="flex items-center gap-2">
                                <RiPriceTag2Line className="text-white" />
                                <h6 className="text-xl text-white">{price_per_night}</h6>
                            </div>
                        </div>
                       
                     
                    </div>
                    
                        <Link to={`/rooms/${card._id}`} className="px-2 flex items-center py-1 text-xs font-semibold  uppercase transition-colors duration-300 transform  text-[#158260] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" data-aos="zoom-in">
                       <div className=" bg-[#158260] text-white p-3 flex gap-2 rounded-lg">
                       <p className="">book now</p>
                            <FaArrowRight className="text-white" />
                       </div>
                        </Link>
                </div>
            </div>


        </div>
//         <div className=" bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%">
//             <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto" data-aos="fade-up"
//      data-aos-anchor-placement="center-bottom">
//                 <img className='rounded-2xl px-5 pt-5' src={room_images} alt={`image for the recipe_name
//  ${title}`} />

//                 <div className="w-56 -mt-10 overflow-hidden   bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%" data-aos="fade-down-right " >
//                     <h3 className="py-2 font-bold tracking-wide text-center text-[#158260] uppercase dark:text-white">{title}</h3>
//                     {/* <h3 className="py-2 px-2  text-gray-600 dark:text-white">{room_description}</h3> */}
//                     <p title={room_description} className='py-2 px-2  text-gray-600 '>
//           {room_description.substring(0, 70)}...
//         </p>

//                     <div className=" flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
//                         {/* <span className="font-bold text-gray-800 dark:text-gray-200">${price_per_night}</span> */}
//                         <Link to={`/rooms/${card._id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform  bg-[#158260] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" data-aos="zoom-in">Book Now</Link>
//                     </div>
//                 </div>
//             </div>




//         </div>



    );
};

export default Card;