import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import axios from "axios";


const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    console.log(user)
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/myBooking/${user?.email}`)
            setItem(data)
          }
          getData()
        }, [user])
    return (
        <div>
          <div>
             <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-[#682018] font-bold">
                        <tr>
                           
                            <th>Email</th>
                            <th>category</th>
                            <th>title</th>
                        
                            <th>price_per_night</th>
                            <th>max_guests</th>
                            <th>beds</th>
                            <th>Booking date</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#682018]">
                        {
                            item.map(list => <tr key={user._id}>

                               
                                <td>{list.email}</td>
                                <td>{list.category}</td>
                                <td>{list.title}</td>

                                <td>${list.price_per_night}</td>

                                <td>{list.max_guests}</td>
                                <td>{list.beds}</td>
                                
                                <td>{list.bookingFrom}
                                <br />{list.bookingTo}</td>




                                {/* <td>{user.lastLoggedAt}</td> */}
                                {/* <td>
                                className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]"
                                    Update</td> */}
                                      <td><button className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
                                    update</button></td>

                                    <td><button className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
                                    Delete</button></td>
                                    <td><button className="btn btn-outline border border-[##682018] hover:bg-[#682018] hover:outline-none hover:text-white text-[#682018]">
                                    Review</button></td>
                            </tr>)



                        }





                    </tbody>
                </table>
            </div>

        </div>
        </div>
    );
};

export default MyBooking;