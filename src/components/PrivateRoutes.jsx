// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../authProvider/AuthProvider";

// import { useContext } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";


// const PrivateRoutes = ({children}) => {
//     const { user, loading } = useContext(AuthContext)
//     const location = useLocation()
//     if (loading) {
//         return <div className="text-center">
//             <span className="loading loading-infinity loading-xs"></span>
//             <span className="loading loading-infinity loading-sm"></span>
//             <span className="loading loading-infinity loading-md"></span>
//             <span className="loading loading-infinity loading-lg"></span>
//         </div>


//     }
//     if (!user) {
//         return <Navigate to='/signin' state={location?.pathname || '/'}></Navigate>
//     }
//     return (
//         <div>
//         {children}

//     </div>
    
       
//     );
// };

// export default PrivateRoutes;


// const PrivateRoutes = ({children}) => {
//     const { user, loading } = useContext(AuthContext)
//     const location = useLocation()
//     if (loading) {
//         return (
//           <div className="text-center">
//             {/* Loading indicator */}
//             <span className="loading loading-infinity loading-xs"></span>
//             <span className="loading loading-infinity loading-sm"></span>
//             <span className="loading loading-infinity loading-md"></span>
//             <span className="loading loading-infinity loading-lg"></span>
//           </div>
//         );
//       }
    
//       if (!user) {
//         return <Navigate to="/signin" state={{ from: location }} />;
//       }
    
      // If user is logged in, render the child components
//       return <div>{children}</div>;
    
// };

// export default PrivateRoutes;