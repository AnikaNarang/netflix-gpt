import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, LOGIN_BG } from "../utils/constants";
import langText from "../utils/languageConstants";
import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { addGptMovies } from "../utils/gptSearchSlice";
import GptResults from "./GptResults";

const GptSearch = () => {
  const lang = useSelector((store) => store.lang.lang);
  const input = useRef();
  const dispatch = useDispatch();

  const getMovies = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await res.json();
    return json;
  };

  const handleSearch = async () => {
    const ai = new GoogleGenAI({
      apiKey: process.env.REACT_APP_GEMINI_API_KEY,
    });
    const prompt = `You are a movie reccommendation system. Reccommend movies based on the following query- ${input.current.value}. Give only 5 movie names in comma seperated format.`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    console.log(response.text);
    const movieNames = response?.text?.split(",");
    const promiseArr = movieNames.map((movie) => getMovies(movie.trim()));
    const gptMovies = await Promise.all(promiseArr);
    dispatch(addGptMovies({ movieNames, movieResults: gptMovies }));
    console.log(gptMovies);
  };

  return (
    <div className="flex-col">
      <div className="-z-10 fixed">
        <img src={LOGIN_BG} className="h-screen w-screen object-cover"></img>
      </div>
      <div className="pt-36 flex w-full md:w-[50vw] m-auto">
        <input
          ref={input}
          placeholder={langText[lang]["search-placeholder"]}
          className="px-2 py-1 md:px-4 md:py-2 w-9/12 border-black border-8 text-md md:text-xl"
        />
        <button
          className="text-white md:font-bold bg-red-700 px-2 py-1 md:px-4 md:py-2 w-3/12 border-8 border-black text-md md:text-xl"
          onClick={handleSearch}
        >
          {langText[lang]["search-btn"]}
        </button>
      </div>
      <GptResults />
    </div>
  );
};
export default GptSearch;
