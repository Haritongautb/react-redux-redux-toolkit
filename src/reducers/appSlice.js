import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    load: false,
    error: false
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        loadOn: (state) => {
            state.load = true;
        },
        loadOff: (state) => {
            state.error = false;
        },
        errorOn: (state, action) => {
            state.error = action.payload;
        },
        errorOff: (state) => {
            state.error = false
        }
    }
})

export const { loadOn, loadOff, errorOn, errorOff } = appSlice.actions;

export const { reducer } = appSlice;