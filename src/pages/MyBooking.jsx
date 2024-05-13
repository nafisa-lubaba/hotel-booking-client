// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
// import axios from "axios";
// import Swal from "sweetalert2";


// const MyBooking = () => {
//     const { user } = useContext(AuthContext)
//     const [item, setItem] = useState([])
//     console.log(user)
//     useEffect(() => {
//         const getData = async () => {
//             const { data } = await axios(`${import.meta.env.VITE_API_URL}/myBooking/${user?.email}`)
//             setItem(data)
//         }
//         getData()
//     }, [user])
//     const handleCancelNow = async id => {
//         console.log(id);
//         const bookingData = {
//           availability: 'Available',
//         }
//         console.log(bookingData);
//         try {
//           const { data } = await axios.put(`${import.meta.env.VITE_URL}/rooms/${id}`, bookingData)
//           console.log(data)
//           if (data.modifiedCount > 0) {
//             Swal.fire({
//               title: 'Success!',
//               text: ' Cancel Successfully',
//               icon: 'success',
//               confirmButtonText: 'Cool'
//             })
//           }
    
    
//         } catch (err) {
//           console.log(err);
//         }
//       }
//       const handleReviewSubmit = async e => {
//         e.preventDefault()
//         const form = e.target
//         const comment_text = form.comment_text.value;
//         const rating = form.rating.value;
//         const timestamp = new Date().toISOString();
    
//         // const roomTitel = items.title;
//         const reviewData = {
//           comment_text, rating, timestamp: timestamp, name, email, image, room_title: selectedRoomTitle,
//         }
//         console.log(reviewData);
//         try {
//           const { data } = await axios.post(
//             `${import.meta.env.VITE_URL}/review`, reviewData)
//           console.log(data)
//           Swal.fire({
//             title: 'Success!',
//             text: ' Review Posted Successfully',
//             icon: 'success',
//             confirmButtonText: 'Cool'
//           })
//           setIsOpen(false)
//         } catch (err) {
//           console.log(err)
//         }
//       }
//     return (
//         <div>
//             <div>
//                 <div className="overflow-x-auto">
//                     <table className="table">
//                         {/* head */}
//                         <thead className="text-[#682018] font-bold">
//                             <tr>

//                                 <th>Email</th>
//                                 <th>category</th>
//                                 <th>title</th>

//                                 <th>price_per_night</th>
//                                 <th>max_guests</th>
//                                 <th>beds</th>
//                                 <th>Booking date</th>
//                                 <th>Update</th>
//                                 <th>Delete</th>
//                                 <th>Review</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-[#682018]">
//                             {
//                                 item.map(list => <tr key={user._id}>


//                                     <td>{list.email}</td>
//                                     <td>{list.category}</td>
//                                     <td>{list.title}</td>

//                                     <td>${list.price_per_night}</td>

//                                     <td>{list.max_guests}</td>
//                                     <td>{list.beds}</td>

//                                     <td>{list.bookingFrom}
//                                         <br />{list.bookingTo}</td>




//                                     {/* <td>{user.lastLoggedAt}</td> */}
//                                     {/* <td>
//                                 className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]"
//                                     Update</td> */}
//                                     <td><button className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
//                                         update</button></td>

//                                     <td><button className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
//                                         Delete</button></td>
//                                     <td><button className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
//                                         Review</button></td>
//                                 </tr>)



//                             }





//                         </tbody>
//                     </table>
//                 </div>
                

//             </div>
//             <div className="bg-orange-100">
//       <h1 className="text-3xl text-center text-[#a86a60] py-5">All Products</h1>
//       <div className="overflow-x-auto">
//         <table className="table w-full mx-auto">
//           <thead>
//             <tr>
//               <th className="hidden md:table-cell">Sl No.</th>
//               <th className="w-full md:w-auto">Room title</th>
//               <th className="w-full md:w-auto">price</th>
//               <th className="w-full md:w-auto">Guest limit</th>
//               <th className="w-full md:w-auto">Beds</th>
//               <th className="w-full md:w-auto">Booking Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((list, index) => (
//               <tr key={list._id}>
//                 <td className="hidden md:table-cell">{index + 1}.</td>
//                 <td className="w-full md:w-auto">{list.title}</td>
//                 <td className="w-full md:w-auto">{list.price_per_night}</td>
//                 <td className="w-full md:w-auto">{list.max_guests}</td>
//                 <td className="w-full md:w-auto">{list.beds}</td>
//                 <td className="w-full md:w-auto text-center">{list.bookingFrom} <br /> to <br /> {list.bookingTo}</td>
//                 <td>
//                   <button onClick={() => { setIsOpen(true); setSelectedRoomTitle(list.title); }} className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
//                     Review
//                   </button>
//                 </td>
//                 <td>
//                   <button className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
//                     Update Now
//                   </button>
//                 </td>
//                 <td>
//                 <button onClick={() => handleCancelNow(list._id)} className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//         {/* Modal for Review Form */}
//         {isOpen && (
//         <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//           <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//             <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
//             <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
//               <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
//                 Review Room
//               </h3>
//               <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
//                 <label className="block mt-3" htmlFor="email">User Name</label>
//                 <input type="text" name="text" id="text" placeholder="user@email.xyz" value={name} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

//                 <label className="block mt-3" htmlFor="commentText">Write A Comment</label>
//                 <textarea
//                   name="comment_text"
//                   id="commentText"
//                   placeholder="Write Comment"
//                   className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//                 />

//                 <label htmlFor="rating" className="text-sm text-gray-700 dark:text-gray-200">
//                   Rating (1-5)
//                 </label>
//                 <input
//                   type="number"
//                   name="rating"
//                   id="rating"
//                   min="1"
//                   max="5"
//                   required
//                   className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//                 />

//                 <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
//                   <button type="button" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
//                     Cancel
//                   </button>

//                   <input type="submit" value="Submit Comment" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
            
//         </div>
        
//     );
// };

// export default MyBooking;



import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../authProvider/AuthProvider";




const MyBooking = () => {
  // const loaderData = useLoaderData()
  const [items, setItems] = useState([]);
  const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext)
  const name = user?.displayName;
  const email = user?.email;
  const image = user?.photoURL;
  console.log(user);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/myBooking/${user?.email}`)
      setItems(data);
    }
    getData()
  }, [user])
  console.log(items);

  const handleCancelNow = async id => {
    console.log(id);
    const bookingData = {
      availability: 'Available',
    }
    console.log(bookingData);
    try {
      const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/rooms/${id}`, bookingData)
      console.log(data)
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: ' Cancel Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }


    } catch (err) {
      console.log(err);
    }
  }
  const handleReviewSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const comment_text = form.comment_text.value;
    const rating = form.rating.value;
    const timestamp = new Date().toISOString();

    // const roomTitel = items.title;
    const reviewData = {
      comment_text, rating, timestamp: timestamp, name, email, image, room_title: selectedRoomTitle,
    }
    console.log(reviewData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/review`, reviewData)
      console.log(data)
      Swal.fire({
        title: 'Success!',
        text: ' Review Posted Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      setIsOpen(false)
    } catch (err) {
      console.log(err)
    }
  }
  return (
   
    <div className="">
      <h1 className="text-3xl text-center text-[#2ccb99] py-5">My booking room</h1>
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto">
          <thead>
            <tr>
              <th className="hidden md:table-cell">No.</th>
              <th className="w-full md:w-auto">Room title</th>
              <th className="w-full md:w-auto">price</th>
              <th className="w-full md:w-auto">Guest limit</th>
              <th className="w-full md:w-auto">Beds</th>
              <th className="w-full md:w-auto">Booking Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((list, index) => (
              <tr key={list._id}>
                <td className="hidden md:table-cell">{index + 1}.</td>
                <td className="w-full md:w-auto">{list.title}</td>
                <td className="w-full md:w-auto">{list.price_per_night}</td>
                <td className="w-full md:w-auto">{list.max_guests}</td>
                <td className="w-full md:w-auto">{list.beds}</td>
                <td className="w-full md:w-auto text-center">{list.bookingFrom} <br /> to <br /> {list.bookingTo}</td>
                <td>
                  <button onClick={() => { setIsOpen(true); setSelectedRoomTitle(list.title); }} className="btn btn-outline border border-[#2ccb99]  bg-[#2ccb99] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black ">
                    Review
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline border border-[#2ccb99]  bg-[#2ccb99] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black">
                    Update Now
                  </button>
                </td>
                <td>
                  <button onClick={() => handleCancelNow(list._id)} className="btn btn-outline border border-[#2ccb99]  bg-[#2ccb99] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Review Form */}
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                Review Room
              </h3>
              <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
                <label className="block mt-3" htmlFor="email">User Name</label>
                <input type="text" name="text" id="text" placeholder="user@email.xyz" value={name} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                <label className="block mt-3" htmlFor="commentText">Write A Comment</label>
                <textarea
                  name="comment_text"
                  id="commentText"
                  placeholder="Write Comment"
                  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />

                <label htmlFor="rating" className="text-sm text-gray-700 dark:text-gray-200">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  min="1"
                  max="5"
                  required
                  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />

                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                  <button type="button" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                    Cancel
                  </button>

                  <input type="submit" value="Submit Comment" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MyBooking;