import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)

    const [loading, setLoading] =useState(true)
    console.log(loading)
    const createUser =(email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)

    } 
    const updateUser =(name, photourl)=>{
        return  updateProfile(auth.currentUser, {
            displayName: name , 
            photoURL: photourl
          }).then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Update Profile successful',
              showConfirmButton: false,
              timer: 1500,
            });
            setUser({...user, displayName: name, photoURL: photourl})
          })
          .catch(error => {
            Swal.fire({
              icon: "error",
              title: "Oops... Update profile Failed",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>'
            });

          

          })
        
     }
     const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = async()=>{
        setUser (null)
        
        setLoading(true)
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true,
        })
        console.log(data)
        signOut(auth)
        console.log(data);
        Swal.fire({
            icon: 'success',
            title: 'logout successfully',
            showConfirmButton: false,
            timer: 1500,
        });
        
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
             if (user) {
                 setUser(user)
                 setLoading(false)
              
             } 
           });
           return ()=> unsubscribe()
 
           
           
 
     },[])
 


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loading,
        updateUser
       
    }
    return (
       <AuthContext.Provider value={allValues}>
        {children}


       </AuthContext.Provider>
      
    );
};

export default AuthProvider;