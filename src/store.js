import { configureStore } from '@reduxjs/toolkit'
import audioSlice from './features/audio/audioSlice.js'

export const store = configureStore({
	reducer: {
		audio: audioSlice,
	},
})
