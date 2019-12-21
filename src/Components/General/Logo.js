import React from 'react'

const Logo = ({ style }) => {
	return (
		<h1 style={{
			fontStyle: "italic",
			fontWeight: "bold",
			fontFamily: "Bebas Neue",
			margin: 0,
			...style
		}}>
			Killer
			<span style={{color: "#5e0501"}}>•</span>
			Games
		</h1>
	)
}

export default Logo
