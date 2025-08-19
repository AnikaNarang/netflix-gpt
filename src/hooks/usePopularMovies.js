import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const movies=useSelector(store=>store.movies.popularMovies)
    const dispatch=useDispatch();

    const getPopularMovies=async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    
    useEffect(()=>{
        !movies && getPopularMovies();
    },[])
}

export default usePopularMovies;