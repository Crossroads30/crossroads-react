import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Videos, Songs, Albums, News } from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import React, { useState } from 'react'

const App = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	return (
		<BrowserRouter>
			<Navbar setSidebarOpen={setSidebarOpen} />
			<SideBar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/videos' element={<Videos />} />
				<Route path='/songs' element={<Songs />} />
				<Route path='/songs/:id' element={<Songs />} />
				<Route path='/albums' element={<Albums />} />
				<Route path='/news' element={<News />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
