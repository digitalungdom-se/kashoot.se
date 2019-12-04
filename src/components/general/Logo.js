import React from './node_modules/react'

const Logo = ({ style }) => {
	return (
		<h1 style={{
			fontStyle: "italic",
			fontWeight: "bold",
			fontFamily: "Bebas Neue",
			margin: 0,
			...style
		}}>
			Kashoot
		</h1>
	)
}

export default Logo
