import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector( store => store.movies.trailerVideo);

    // Fetching trailer video
    const getMovieVideo = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        //Finding out trailer from returned object of arrays (which contains several videos)
        const filterVideos = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterVideos.length ? filterVideos[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideos(trailer));
    };
    useEffect(()=>{
        !trailerVideo && getMovieVideo();
    },[]);
}

export default useMovieTrailer;