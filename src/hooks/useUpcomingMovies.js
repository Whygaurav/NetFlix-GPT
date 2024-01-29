import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const JSON = await data.json();
        dispatch(addUpcomingMovies(JSON.results));
    } 

    useEffect(()=>{
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;