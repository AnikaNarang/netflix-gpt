import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";


const MainContainer=()=>{
     const movies=useSelector(store=>store.movies?.nowPlayingMovies);
     if(!movies) return;

     const mainMovie=movies[0];
     const {original_title,overview}=mainMovie;
    return(
        <div className="md:pt-0 pt-[26%] bg-black">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={mainMovie.id}/>
        </div>
    )
}
export default MainContainer;