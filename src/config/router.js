
import {createBrowserRouter,RouterProvider,Outlet,useNavigate} from "react-router-dom";

// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from "./firebase";
import { useState,useEffect } from "react";
import  Dashboard  from "../views/Dashboard/Dashboard";
import Navbar from "../components/Navbar";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Dashboard/>
            }
            
                ]
    },
    // {
    //     path: '/login',
    //     element: <Login/>
    // },
    // {
    // path: '/signup',
    // element: <SignUp/>
    // },
  
    
]);

function Layout(){
    const[user,setUser]=useState()
    const navigate=useNavigate()

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         setUser(user)
    //     });
    // }, [])

    // useEffect(()=>{
    //     const path=window.location.pathname
    //     if(user){
    //         if(path==='/login'){
    //             navigate('/')
    //         }
    //         else{
    //             if(path==='/selloptions'){
    //                 navigate('/login')
    //             }
    //         }
    //     }
    // },[window.location.pathname,user])

    return <div>
        
        <Outlet/>
    </div>
}
function Router(){
    return <RouterProvider router={router} />
}

export default Router;