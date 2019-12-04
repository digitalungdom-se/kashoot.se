// Third party
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// Custom components
import Boiler from './Boiler.js'
import ScrollToTop from "../wrappers/ScrollToTop"

const Router = () => (
	<BrowserRouter>
		<ScrollToTop>
			<Boiler />
		</ScrollToTop>
	</BrowserRouter>
)

export default Router
