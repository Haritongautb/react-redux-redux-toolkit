import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    likes: 0,
    dislikes: 0
}

const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
        likesIncrement: (state) => {
            state.likes++
        },
        dislikesIncrement: (state) => {
            state.dislikes++
        }
    }
})

export const { likesIncrement, dislikesIncrement } = likesSlice.actions;
export const { reducer } = likesSlice;