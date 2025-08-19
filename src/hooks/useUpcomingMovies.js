import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
    const movies=useSelector(store=>store.movies.upcomingMovies)
    const dispatch=useDispatch();

    const getUpcomingMovies=async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    
    useEffect(()=>{
        !movies && getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;