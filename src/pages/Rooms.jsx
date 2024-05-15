import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


const Rooms = () => {
  useEffect(() => {
    Aos.init();

  }, [])
  const [rooms, setRooms] = useState([])
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`, {
        params: {
          minPrice,
          maxPrice
        }
      });
      setRooms(data)
    }
    getData()
  }, [minPrice, maxPrice])

  // const handleFilter = async () => {
  //   try {
  //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`, {
  //       params: {
  //         minPrice,
  //         maxPrice
  //       }
  //     });
  //     setRooms(data);
  //   } catch (error) {
  //     console.error("Error fetching filtered rooms:", error);
  //   }
  // };
  const handleFilter = async () => {
    try {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`, {
        params: {
          minPrice,
          maxPrice
        }
      });
      setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };




  return (
    //     <div>
    //       <h1 className="flex justify-center items-center text-3xl font-bold mb-6">Explore Our Decorated Rooms & Book Your Perfect Getaway</h1>
    //       <div></div>
    //       <div>

    //           <input
    //             type="number"
    //             placeholder="Min Price"
    //             value={minPrice}
    //             onChange={(e) => setMinPrice(e.target.value)}
    //           />
    //           <input
    //             type="number"
    //             placeholder="Max Price"
    //             value={maxPrice}
    //             onChange={(e) => setMaxPrice(e.target.value)}
    //           />
    //           <button onClick={handleFilter}>Filter</button>
    //         </div>


    //       <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full">

    //         {
    //           rooms.map(card => (
    //             <Link  to={`/rooms/${card._id}`} key={card._id} className='card bg-[#767676] bg-opacity-20 backdrop-blur-base rounded-lg text-[#158260]' data-aos='fade-right'>
    //               <figure className=''>

    //                 <img className='rounded-xl px-5 pt-5' src={card.room_images} alt={`image for the tourist_spot_name
    // ${card.category}`} />
    //               </figure>

    //               <div className='card-body' data-aos='fade-left'>

    //               <hr className='border-dotted my-2 border-[#158260]' />
    //                 <h1 className=" text-3xl font-bold lg:text-xl lg:font-bold">{card.title}</h1>


    //                 <div className='mb-3'>
    //                   <p className='font-semibold'>category:  <span className='font-bold ml-3'> {card.category}</span></p>
    //                   <p className='font-semibold'>Description:  <span className='font-bold ml-3'> {card.room_description}</span></p>
    //                   <p className='font-semibold'>price_per_night:  <span className='font-bold ml-3'> ${card.price_per_night}</span></p>


    //                 </div>


    //                 <hr className='border-dotted my-2 border-[#158260]' />

    //                 <div className='flex justify-between mb-3'>


    //                 </div>


    //               </div>
    //             </Link>

    //           ))}

    //       </div>
    //     </div>
    <div className=" bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%">
      <h1 className="flex justify-center items-center text-3xl font-bold mb-6">Explore Our Decorated Rooms & Book Your Perfect Getaway</h1>
      <div>
        {/* Price filter UI */}
        <div className="flex justify-center items-center b-black mb-10">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className="btn bg-green-300" onClick={handleFilter}>Filter</button>
        </div>
        {/* Rooms display */}
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full  ">
          {rooms.map((card) => (
            <Link to={`/rooms/${card._id}`} key={card._id} className="card bg-[#767676] bg-opacity-20 backdrop-blur-base rounded-lg text-[#158260]  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%" data-aos="fade-right">
              <figure className="">
                <img className="rounded-xl px-5 pt-5" src={card.room_images} alt={`image for the tourist_spot_name ${card.category}`} />
              </figure>
              <div className="card-body" data-aos="fade-left">
                <hr className="border-dotted my-2 border-[#158260]" />
                <h1 className="text-3xl font-bold lg:text-xl lg:font-bold">{card.title}</h1>
                <div className="mb-3">
                  <p className="font-semibold">
                    category: <span className="font-bold ml-3">{card.category}</span>
                  </p>
                  <p className="font-semibold">
                    Description: <span className="font-bold ml-3">{card.room_description}</span>
                  </p>
                  <p className="font-semibold">
                    price_per_night: <span className="font-bold ml-3">${card.price_per_night}</span>
                  </p>
                </div>
                <hr className="border-dotted my-2 border-[#158260]" />
                <div className="flex justify-between mb-3"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;