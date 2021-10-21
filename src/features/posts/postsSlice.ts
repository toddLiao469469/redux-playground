import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface PostsState {
  data: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostsState = {
  data: [],
  status: 'idle',
};



export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state ,action) => {
      state.data  = [...action.payload]
    },
   
  },

  
});
export const { fetchPosts } = postsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPosts = (state: RootState) => state.postsSlice.data;



export default postsSlice.reducer;
