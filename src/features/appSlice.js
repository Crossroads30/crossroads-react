import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isPlaying: false,
	isAlbum: false,
	albumName: '',
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAlbumOn: (state => {
			state.isAlbum = true
		}),
		setAlbumOff: (state => {
			state.isAlbum = false
		}),
		setAlbumName: ((state, {payload}) => {
			state.albumName = payload
		}),
	},
})

export const { setAlbumOn, setAlbumOff, setAlbumName } = appSlice.actions
export default appSlice.reducer
