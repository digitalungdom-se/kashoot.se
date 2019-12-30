import React from "react"
import { Col } from "antd"
// Custom components
import { TransparentDivBorder } from "../Styling"
import { AlignCenter } from "../Components/General"

const BrightWrapper = ({ children }) => {
	return (
		<AlignCenter style={{marginTop: "10vh"}}>
	    <Col
	      xs={24}
	      sm={15}
	      md={12}
	      lg={10}
	      xl={8}
	    >
	      <TransparentDivBorder>
	        {children}
	      </TransparentDivBorder>
	    </Col>
		</AlignCenter>
	)
}

export default BrightWrapper
