// Thrid party components
import React from "react"
// Custom components
import Logo from "./Logo"
import AlignCenter from "./AlignCenter"
import { graphicProfile } from "../../Styling"

const Loading = () => {
	return (
		<AlignCenter style={{marginTop: "20vh", color: "#d92f10"}}>
			<div style={{margin: "auto"}}>
        <Logo
					style={{
						fontSize: 40,
						color: graphicProfile.colors.mainRed
					}}
				/>
			</div>
		</AlignCenter>
	)
}

export default Loading
