import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const SignIn = () => {
    const { signInUser } = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/';
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        const { email, password } = data
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
        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                if (result.user) {
                    Navigate(from)
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops... Login Failed",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });


            })
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                // style={{
                //     backgroundImage: `url('https://i.ibb.co/BL947D0/regpage.png')`,
                // }}

                >
                    <img src="https://i.ibb.co/BL947D0/regpage.png" alt="" />
                </div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='https://merakiui.com/images/logo.svg'
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Welcome back!
                    </p>

                    <SocialLogin></SocialLogin>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="userame" className="block dark:text-gray-100">Email</label>
                            <input type="text" name="username" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-100 dark:bg-gray-50 dark:text-gray-100 focus:dark:border-violet-100"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="userpassword"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                    {...register("password", { required: true })}
                                />
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

                        <button className="block w-full p-3 text-center rounded-sm  btn btn-outline border border-[#682018] hover:text-white  hover:outline-none hover:bg-[#682018] text-[#682018]">Log In</button>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/registration'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign up
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;