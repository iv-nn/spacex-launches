import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Launch } from '../../types/launch'

export interface LaunchState {
    selected: Launch | null;
}

const initialState: LaunchState = {
    selected: null
}

export const launchSlice = createSlice({
    name: 'launch',
    initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<Launch | null>) => {
            state.selected = action.payload
        }
    }
})

export const { setSelected } = launchSlice.actions

export default launchSlice.reducer
