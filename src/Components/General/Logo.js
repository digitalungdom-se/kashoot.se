import React from 'react'
// Custom
import { graphicProfile } from "../../Styling"

const Logo = ({ style }) => {
	return (
		<h1 style={{
			fontStyle: "italic",
			fontWeight: "bold",
			fontFamily: "Bebas Neue",
			color: graphicProfile.colors.white,
			margin: 0,
			...style
		}}>
			Killer
			<span style={{color: "#5e0501", margin: "0 2%"}}>•</span>
			Games
		</h1>
	)
}

export default Logo
