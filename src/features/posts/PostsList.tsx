import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { sagaActions } from './postsSaga';
import { selectPosts } from './postsSlice';

const PostsList = () => {
    const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  console.log(posts);
    return (
        <div>
            <button onClick={()=>dispatch({type:sagaActions.FETCH_DATA_SAGA})}>
                get Data
            </button>
            
        </div>
    )
}

export default PostsList
