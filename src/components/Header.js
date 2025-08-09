import { useSelector } from 'react-redux';
import {auth} from '../utils/firebase'
import { signOut } from 'firebase/auth'; 
import appStore from '../utils/appStore';
import { useNavigate } from 'react-router';

const Header = () => {

    const user=useSelector(store=>store.user)
    const navigate=useNavigate();

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
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
      </div>
      {user && <div className="flex mx-2 my-5">
        <img src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"></img>
        <button
          className="text-white font-bold mx-5 text-nowrap"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};
export default Header;
