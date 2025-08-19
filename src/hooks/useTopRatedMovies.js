import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
    const movies=useSelector(store=>store.movies.topRatedMovies)
    const dispatch=useDispatch();

    const getTopRatedMovies=async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    
    useEffect(()=>{
        !movies && getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;