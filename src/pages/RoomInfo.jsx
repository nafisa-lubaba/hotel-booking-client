import { useLoaderData } from "react-router-dom";

const RoomInfo = () => {
    const data = useLoaderData();
    console.log(data);

    // Assuming data is an object with properties like _id, title, image, and room_description
    const { _id, title, banner_image, room_description, room_images,price_per_night, room_size, availability, special_offers } = data;

    // If data is an object with a nested property 'room' containing the desired information
    // const { room } = data;
    // const { _id, title, image, room_description } = room;

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-64" src={banner_image} alt="Room" />

                    <div className="p-6">
                        <div>
                            <a href="#" className="block mt-2 text-xl font-semibold text-[#2ccb99] duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>

                            {/* <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{room_description}</a> */}
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="text-[#2ccb99] font-bold">Description of the Room:</span>
                                {room_description}</p>
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <h2 className="border font-bold text-[#2ccb99]">Price: ${price_per_night}</h2>
                                   
                                    <a href="#" className="mx-2 font-semibold text-[#2ccb99]" tabIndex="0" role="link">Room Size: {room_size}</a>
                                    <a href="#" className="mx-2  text-gray-700 dark:text-gray-200" tabIndex="0" role="link"> Availability: <span className="font-bold text-[#2ccb99]">  {availability}</span>
                                    </a>
                                </div>
                               
                            </div>
                           
                        </div>
                    </div>
                    <a href="#" className="mx-2  text-gray-700 dark:text-gray-200" tabIndex="0" role="link"> special_offers: <span className="font-bold text-[#2ccb99]">  {special_offers}</span>
                                    </a>
                    
                    <section className="py-6 dark:bg-gray-100">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                                {
                                    room_images.map((room_image,idx)=>(
                                        <img key={idx} className="object-cover w-full dark:bg-gray-500 aspect-square" src={room_image} />

                                    ))
                                }
                               
                               
                            </div>
                        </div>
                    </section>

                </div>


            </div>

        </div>

    );
};

export default RoomInfo;
