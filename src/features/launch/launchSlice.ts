import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Launch } from '../../types/launch'

export interface LaunchState {
    shown: Launch | null;
}

const initialState: LaunchState = {
    shown: null
}

export const launchSlice = createSlice({
    name: 'launch',
    initialState,
    reducers: {
        setShown: (state, action: PayloadAction<Launch>) => {
            state.shown = action.payload
        }
    }
})

export default launchSlice.reducer
