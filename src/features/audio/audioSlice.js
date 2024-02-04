import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isPlaying: false,
}

const audioSlice = createSlice({
	name: 'audio',
	initialState,
	reducers: {},
})

// export const {} = audioSlice.actions
export default audioSlice.reducer
