import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userslice';
import moviesReducer from './movieSlice';
import gptReducer from './gptSlice';
import configReducer from './ConfigSlice'

const appstore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer
    }
});

export default appstore;