import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { AVATAR_URL, NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
    const dispatch=useDispatch();

  useEffect(() => {
    const unactivate=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unactivate();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <div className=" w-48 ">
        <img src={NETFLIX_LOGO}></img>
      </div>
      {user && (
        <div className="flex mx-2 my-5">
          <img src={AVATAR_URL}></img>
          <button
            className="text-white font-bold mx-5 text-nowrap"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
