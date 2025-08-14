import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:'gptSearch',
    initialState:{
        gptSearchVisible:false,
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.gptSearchVisible=!state.gptSearchVisible;
        }
    }
});
export default gptSearchSlice.reducer;
export const {toggleGptSearch}=gptSearchSlice.actions;