import { configureStore } from '@reduxjs/toolkit'
import appSlice from './features/appSlice.js'

export const store = configureStore({
	reducer: {
		app: appSlice,
	},
})
