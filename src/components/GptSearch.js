import { useSelector } from "react-redux";
import { LOGIN_BG } from "../utils/constants";
import langText from '../utils/languageConstants'

const GptSearch = () => {
    const lang=useSelector(store=>store.lang.lang);
  return (
    <div className="relative flex justify-center">
      <div className="absolute -z-5">
        <img src={LOGIN_BG}></img>
      </div>
      <div className="relative p-2 top-36 flex w-[50vw]">
        <input
          placeholder={langText[lang]['search-placeholder']}
          className=" px-4 py-2 w-9/12 border-black border-8"
        />
        <button className="text-white font-bold bg-red-700 px-4 py-2 w-3/12 border-8 border-black text-xl">
          {langText[lang]['search-btn']}
        </button>
      </div>
    </div>
  );
};
export default GptSearch;
