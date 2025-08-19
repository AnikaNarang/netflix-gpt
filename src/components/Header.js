import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { AVATAR_URL, NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { LANGUAGES_SUPPORTED } from "../utils/constants";
import { changeLanguage } from "../utils/langSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptSearchVisible=useSelector(store=>store.gptSearch.gptSearchVisible);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang=useSelector(store=>store.lang.lang);

  useEffect(() => {
    const unactivate = onAuthStateChanged(auth, (user) => {
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
    return () => unactivate();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 md:flex justify-between">
      <div className=" w-48 m-auto md:m-0">
        <img src={NETFLIX_LOGO}></img>
      </div>
      {user && (
        <div className="flex mx-2 md:my-5 justify-between">
          {gptSearchVisible && <select className="text-white bg-gray-800 px-4 py-2"
          onChange={(e)=>{dispatch(changeLanguage(e.target.value))}}
          value={lang}
          >
            {LANGUAGES_SUPPORTED.map(ele=>{
              return(
                <option key={ele.identifier} value={ele.identifier}>{ele.name}</option>
              )
            })}
          </select>}
          <button
            className="text-white font-bold bg-red-700 px-4 py-2 mx-4 text-nowrap rounded-lg"
            onClick={() => {
              dispatch(toggleGptSearch());
            }}
          >
            {gptSearchVisible?"Homepage":"GPT Search"}
          </button>
          <img src={AVATAR_URL} className="hidden md:inline-block"></img>
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
