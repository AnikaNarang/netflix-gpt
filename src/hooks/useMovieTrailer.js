import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer=(movieId)=>{
    const trailer=useSelector(store=>store.movies.trailerVideo);
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
    const videos = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const jsonData = await videos.json();
    const trailer =
      jsonData?.results?.filter((ele) => ele.type === "Trailer")[0] ||
      jsonData[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailer && getMovieTrailer();
  }, []);
}
export default useMovieTrailer;