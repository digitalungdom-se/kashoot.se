import React from "react"
import { Row, Col } from "antd"

const AlignCenter = ({ style, children, ...props }) => (
	<Row
		type="flex"
		justify="center"
		style={{...style}}
	>
		<Col
			type="flex"
			justify="center"
			xs={{ span: 22 }}
			sm={{ span: 22 }}
			md={{ span: 20 }}
			lg={{ span: 18 }}
			xl={{ span: 16 }}
			{...props}
		>
			{children}
		</Col>
	</Row>
)

export default AlignCenter
