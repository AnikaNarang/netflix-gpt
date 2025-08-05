import { useState } from "react";
import Header from "./Header";

const Login=()=>{

    const [isSignInForm,setSignInForm]=useState(true);

    const handleToggle=()=>{
        setSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg"></img>
            </div>
            <form className="absolute p-10 my-32 mx-auto left-0 right-0 bg-black w-3/12 bg-opacity-85 text-white">
                <p className="font-bold text-3xl my-4">{isSignInForm?"Sign In":"Sign Up"}</p>
                {!isSignInForm && <input className="p-3 my-2 w-full bg-gray-900 rounded-lg bg-opacity-80 border-white border" placeholder="Full Name" type='text'/>}
                <input className="p-3 my-2 w-full bg-gray-900 rounded-lg bg-opacity-80 border-white border" placeholder="Email or mobile number" type='text'/>
                <input className="p-3 my-2 w-full bg-gray-900 rounded-lg bg-opacity-80 border-white border" placeholder="Password" type='password'/>
                <button className="p-3 my-7 bg-red-600 w-full rounded-lg font-bold text-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p>{isSignInForm?"New to Netflix?":"Already a user?"} <span className="font-bold cursor-pointer" onClick={handleToggle}>{isSignInForm?"Sign up now":"Sign in now"}</span></p>
            </form>
        </div>
    )
}
export default Login;