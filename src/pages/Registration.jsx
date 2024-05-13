import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";




const Registration = () => {
    const { createUser } = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location?.state || '/'
	const [showPassword, setShowPassword] = useState(false);
    
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = async (data) => {
		const { email, password, name } = data
		if (password.length < 6) {
			toast('Password should be 6 character or more')
		}
		else if (!/[A-Z]/.test(password)) {
			toast('Password should have at lease one Uppercase letter')
			return;
		}
		else if (!/[a-z]/.test(password)) {
			toast('Password should have at lease one Lowercase letter')
			return;
		}
    // try {
    //  const result = createUser(email, password)
		// 	.then(result => {
		// 		Swal.fire({
		// 			icon: 'success',
		// 			title: 'Registration successful',
		// 			showConfirmButton: false,
		// 			timer: 1500,
		// 		});
		// 		if (result.user) {
		// 			Navigate(from)
		// 		}
		// 	})
		// 	.catch(error => {
		// 		Swal.fire({
		// 			icon: "error",
		// 			title: "Oops... Registration Failed",
		// 			text: "Something went wrong!",
		// 			footer: '<a href="#">Why do I have this issue?</a>'
		// 		});


		// 	})
		// }
    try {
      const result = await createUser(email, password, name);
      console.log(result.user);
      const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
              email: result?.user?.email,
          },
          { withCredentials: true }
      );
      console.log(data);
      Swal.fire({
          icon: 'success',
          title: 'Registration successful',
          showConfirmButton: false,
          timer: 1500,
      });
      navigate(from, { replace: true });
  } catch (error) {
      Swal.fire({
          icon: "error",
          title: "Oops... Registration Failed",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.error("An error occurred:", error);
  }
  
     }
		
	
	const togglePasswordVisibility = () => {
			setShowPassword(!showPassword);
		};
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            {/* <img
              className='w-auto h-7 sm:h-8'
              src='https://merakiui.com/images/logo.svg'
              alt=''
            /> */}
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Get Your Free Account Now.
          </p>
          

         

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  lg:w-1/4'></span>

            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
              or Registration with email
            </div>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Fullname</label>
                    <input type="text" name="username" id="username" placeholder="Fullname" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        {...register("fullName", { required: true })} />
                    {errors.fullName && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                    <input type="text" name="username" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Image Url</label>
                    <input type="text" name="username" id="username" placeholder="Image url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        {...register("imageUrl")} />

                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("password", { required: true })} />
                        {/* Show/hide password toggle */}
                        <button type="button" className="absolute inset-y-0 right-0 px-3 flex items-center" onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                        <FaRegEye className="w-6 h-6" />
                                    ) : (
                                        <FaRegEyeSlash className="w-6 h-6" />
                                    )}
                                </button>
                    </div>
                    {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm  btn btn-outline border border-[#682018] hover:text-white  hover:outline-none hover:bg-[#682018] text-[#682018] dark:text-gray-50 dark:bg-violet-600">Sign up</button>
            </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/signin'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
        
        > <img  className="w-full h-full"  src="https://i.ibb.co/qkGRpq8/login2.jpg" alt="" /></div>
      </div>
      <ToastContainer />
    </div>
    );
};

export default Registration;