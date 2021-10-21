import { call, takeEvery, put } from "redux-saga/effects";
import { fetchPosts } from "./postsSlice";
export const sagaActions = {
    FETCH_DATA_SAGA: "FETCH_DATA_SAGA"
  };
  
interface CallAPIArgs{
    url:string
    method?:string
}
let callAPI = async (args:CallAPIArgs):Promise<Response> => {
    const {url,method} = args
  return await fetch(url,{
    method,
  }).then(res=>res.json())
};

export function* fetchDataSaga():Iterator<any> {
  try {
    const result:any = yield call(
      callAPI,{ url: "https://jsonplaceholder.typicode.com/posts" ,method:'GET'}
    );
    
    console.log(result)
    yield put(fetchPosts(result.data));
    
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
