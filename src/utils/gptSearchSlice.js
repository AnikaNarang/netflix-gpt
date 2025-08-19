import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:'gptSearch',
    initialState:{
        gptSearchVisible:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.gptSearchVisible=!state.gptSearchVisible;
        },
        addGptMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
});
export default gptSearchSlice.reducer;
export const {toggleGptSearch,addGptMovies}=gptSearchSlice.actions;