import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTvSeries from "../hooks/useTvSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSrch = useSelector(store => store.gpT.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvSeries();

  return (
    <div>
      <Header/>
      {
        showGptSrch ? <GptSearch/> : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }
    </div>
  )
}

export default Browse;