import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorOn, loadOn, loadOff } from "./appSlice";

const initialState = {
    commentsData: [],
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (url = "https://jsonplaceholder.typicode.com/comments?_limit=10", thunkApi) => {
        try {
            thunkApi.dispatch(loadOn());
            const response = await fetch(url);
            let result = await response.json();
            thunkApi.dispatch(loadOff())
            return thunkApi.fulfillWithValue(result)
        } catch (e) {
            thunkApi.dispatch(errorOn("There is something wrong with your API"));
            thunkApi.dispatch(loadOff())
        }
    }
)

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.commentsData.push(action.payload)
        },
        deleteComment: (state, action) => {
            state.commentsData = state.commentsData.filter(item => item.id !== action.payload)
        },
        changeComment: (state, action) => {
            state.commentsData = state.commentsData.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload }
                }
                return item;
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.fulfilled, (state, action) => {
                const filteredComments = action.payload.map(item => {
                    return {
                        id: item.id,
                        comment: item.name
                    }
                })
                state.commentsData = filteredComments;
            })
    }
})

export const { addComment, changeComment, deleteComment } = commentsSlice.actions;

export const { reducer } = commentsSlice;
