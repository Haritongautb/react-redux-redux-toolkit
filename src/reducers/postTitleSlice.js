import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    postTitle: ""
}

const postTitleSlice = createSlice({
    name: "postTitle",
    initialState,
    reducers: {
        postTitleChange: (state, action) => {
            state.postTitle = action.payload;
        }
    }
})

export const { postTitleChange } = postTitleSlice.actions;
export const { reducer } = postTitleSlice;