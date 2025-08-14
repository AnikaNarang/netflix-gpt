import { useSelector } from "react-redux";
import CardList from "./CardList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="p-3 -mt-36 z-15 relative">
        <CardList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <CardList title={"Popular Movies"} movies={movies.popularMovies} />
        <CardList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <CardList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
