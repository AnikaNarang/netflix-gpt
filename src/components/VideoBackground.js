import useMovieTrailer from "../hooks/useMovieTrailer";
import {  useSelector } from "react-redux";


const VideoBackground = ({ movieId }) => {
  
  const trailer=useSelector(store=>store.movies.trailerVideo);
  
  useMovieTrailer(movieId);

  if(!trailer) return
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key+'?autoplay=1&mute=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};
export default VideoBackground;
