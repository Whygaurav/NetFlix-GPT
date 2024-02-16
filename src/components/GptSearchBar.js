import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();


    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        
        return json.results;
    };

    const handleGptSearchClick = async() => {
        // console.log(searchText.current.value);
        // Make an API call to GPT API and get Movie Results
        // To avoid the "browser-like env.." error. Set "dangerouslyAllowBrowser" to true.
        const gptQuery = 
            "Act as a movie recommendation system and suggest some movies for the query: " + 
            searchText.current.value + 
            " Only recommend 5 movies, comma separated like the example given ahead. Example result: Drive, Enemy, Before Midnight, Arrival, Pulp Fiction";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if(!gptResults.choices){
            //TODO: Write Error Handling
        }
        console.log(gptResults.choices?.[0]?.message?.content);
        // Ex Machina, Blade Runner 2049, The Matrix, Interstellar, Inception
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        // ['Ex Machina', ' Blade Runner 2049', ' The Matrix', ' Interstellar', ' Inception']
        // Now searching each movie through tmdb api
        const promiseArray = gptMovies.map( movie => searchMovieTMDB(movie)) // map function will call 5 APIs immediately but the APIs will take some time to return the result. So instead it will return 5 Promises immediately.
        // [ Promise, Promise, Promise, Promise, Promise,] - This will take some time to resolve.
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(addGptMovieResult({movieName: gptMovies, movieResult: tmdbResults}));
    };
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input 
                ref={searchText}
                type="text" 
                placeholder={lang[langKey].gptSearchPlaceholder} 
                className="p-4 m-4 col-span-9">
            </input>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg" onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar