import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        traileVideo: null,
        popularMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTraileVideo: (state, action)=>{
            state.traileVideo = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies= action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTraileVideo, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;