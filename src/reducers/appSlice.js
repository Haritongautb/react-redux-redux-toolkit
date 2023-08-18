import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const initialState = {
    load: false,
    error: false
}

export const errorOn = createAsyncThunk(
    "app/errorOn",
    async (errorMessage, thunkApi) => {
        setTimeout(() => {
            thunkApi.dispatch(errorOff())
        }, 5000)
        return thunkApi.fulfillWithValue(errorMessage);
    }
)

const errorOff = createAction('app/errorOff');

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        loadOn: (state) => {
            state.load = true;
        },
        loadOff: (state) => {
            state.load = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(errorOn.fulfilled, (state, action) => {
                state.error = action.payload;
            })
            .addCase(errorOff, state => {
                state.error = false;
            })
    }
})

export const { loadOn, loadOff } = appSlice.actions;

export const { reducer } = appSlice;