// Third party
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// Custom Components
import Boiler from './Boiler.js'
import ScrollToTop from "../Wrappers/ScrollToTop"

const Router = () => (
	<BrowserRouter>
		<ScrollToTop>
			<Boiler />
		</ScrollToTop>
	</BrowserRouter>
)

export default Router
