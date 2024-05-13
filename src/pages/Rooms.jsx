import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Rooms = () => {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`)
      setRooms(data)
    }
    getData()
  }, [])



  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full">

        {
          rooms.map(card => (
            <Link  to={`/rooms/${card._id}`} key={card._id} className='card bg-[#767676] bg-opacity-20 backdrop-blur-base rounded-lg text-[#158260]' data-aos='fade-right'>
              <figure className=''>

                <img className='rounded-xl px-5 pt-5' src={card.room_images} alt={`image for the tourist_spot_name
${card.category}`} />
              </figure>
              <div className='card-body' data-aos='fade-left'>
                <h1 className=" text-3xl font-bold lg:text-xl lg:font-bold">{card.title}</h1>


                <div className='mb-3'>
                  <p className='font-semibold'>category:  <span className='font-bold ml-3'> {card.category}</span></p>
                  <p className='font-semibold'>Description:  <span className='font-bold ml-3'> {card.room_description}</span></p>
                  {/* <p className=''>Description:  <span className='font-semibold ml-3'>  {cards.short_description}</span></p> */}

                  {/* <p className=''>Travel Time:  <span className='font-semibold ml-3'>{cards.travel_time}</span></p>
                  <p className=''>Travel Time:  <span className='font-semibold ml-3'>{cards.average_cost}</span></p> */}

                </div>


                <hr className='border-dotted my-2' />

                <div className='flex justify-between mb-3'>


                </div>


              </div>
            </Link>

          ))}

      </div>
    </div>
  );
};

export default Rooms;