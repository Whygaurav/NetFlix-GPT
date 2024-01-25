import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector( store => store.movies?.nowPlayingMovies);
    if(movies==null) return; //(!movies) return;        ---This is done to avoid error/breakage in case the store has not been fetched

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const { original_title, overview, id } = mainMovie; // Fetching from main Movie all the details we want.

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} /> 
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer;
