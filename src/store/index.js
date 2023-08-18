import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as appSlice } from "../reducers/appSlice";
import { reducer as likesSlice } from "../reducers/likesSlice";
import { reducer as postTitleSlice } from "../reducers/postTitleSlice";
import { reducer as commentsSlice } from "../reducers/commentsSlice";
import { spamFilter } from "../middlewares";

const reducers = combineReducers({
    likes: likesSlice,
    postTitle: postTitleSlice,
    comments: commentsSlice,
    app: appSlice
})

const store = configureStore({
    reducer: reducers,
    middleWare: getDefaultMiddleware => getDefaultMiddleware().concat(spamFilter),
    devTools: process.env.NODE_ENV !== "production",
})


export default store;