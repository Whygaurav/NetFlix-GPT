import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTvSeries } from "../utils/moviesSlice";

const useTvSeries = () => {
    const dispatch = useDispatch();

    const getTvSeries = async() => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
        const JSON = await data.json();
        dispatch(addTvSeries(JSON.results));
    }

    useEffect(() => {
        getTvSeries();
    }, []);

}

export default useTvSeries;