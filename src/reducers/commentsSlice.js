import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    load: false
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload)
        },
        deleteComment: (state, action) => {
            state.comments = state.comments.filter(item => item.id !== action.payload)
        },
        changeComment: (state, action) => {
            state.comments = state.comments.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload }
                }
                return item;
            })
        },
        loadComments: (state, action) => {
            const newComments = action.payload.map(item => {
                return { comment: item.name, id: item.id }
            })

            state.comments.push(newComments);
        }

    }
})

export const { addComment, deleteComment, changeComment, loadComment } = commentsSlice.actions;

export const { reducer } = commentsSlice;