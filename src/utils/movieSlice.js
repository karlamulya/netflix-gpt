import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        traileVideo: null
    },
    reducers: {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTraileVideo: (state, action)=>{
            state.traileVideo = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTraileVideo } = movieSlice.actions;
export default movieSlice.reducer;