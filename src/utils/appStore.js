import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from './moviesSlice'
import gptSearchReducer from './gptSearchSlice';
import langReducer from './langSlice'

const appStore=configureStore({
    reducer:{user:userReducer,
        movies:movieReducer,
        gptSearch:gptSearchReducer,
        lang:langReducer
    }}
);
export default appStore