import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
    const movies=useSelector(store=>store.movies.nowPlayingMovies)
    const dispatch=useDispatch();

    const getNowPlayingMovies=async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    
    useEffect(()=>{
        !movies && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;