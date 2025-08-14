import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setErrMessage(validate(email.current.value, password.current.value));
    if (errMessage) return;

    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
          }).then(() => {
            const {uid, email,displayName}=auth.currentUser;
            dispatch(addUser({uid, email, displayName}))
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(`${errorCode}-${errorMessage}`);
        });
    }
  };

  const handleToggle = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG}></img>
      </div>
      <form className="absolute p-10 my-32 mx-auto left-0 right-0 bg-black w-3/12 bg-opacity-85 text-white">
        <p className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={fullName}
            className="p-3 my-2 w-full bg-gray-900 rounded-lg bg-opacity-80 border-white border"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="p-3 my-2 w-full bg-gray-900 rounded-lg bg-opacity-80 border-white border"
          placeholder="Email or mobile number"
          type="text"
        />
        <input
          ref={password}
          className="p-3 my-2 w-full bg-gray-900 rounded-lg bg-opacity-80 border-white border"
          placeholder="Password"
          type="password"
        />
        {errMessage && (
          <p className="p-2 font-bold text-red-700">{errMessage}</p>
        )}
        <button
          onClick={handleClick}
          className="p-3 my-7 bg-red-600 w-full rounded-lg font-bold text-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? "New to Netflix?" : "Already a user?"}{" "}
          <span className="font-bold cursor-pointer" onClick={handleToggle}>
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
