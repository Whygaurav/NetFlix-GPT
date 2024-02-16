import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch; 
        },
        addGptMovieResult : (state, action) => {
            const {movieName, movieResult} = action.payload;
            state.movieNames = movieName;
            state.movieResults = movieResult;
        },
    }
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;