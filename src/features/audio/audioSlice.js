import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isPlaying: false,
	trackIndex: 0,
}

const audioSlice = createSlice({
	name: 'audio',
	initialState,
	reducers: {
		setPlay: state => {
			state.isPlaying = true
		},
		setPause: state => {
			state.isPlaying = false
		},
	},
})

export const { setPlay, setPause, setTrackProgress } = audioSlice.actions
export default audioSlice.reducer
