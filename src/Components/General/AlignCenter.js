import React from "react"
import { Row, Col } from "antd"

const AlignCenter = ({
	style,
	children,
	centerHorizontal = true,
	...props }) =>(

	<Row
		type="flex"
		justify="center"
		style={{...style}}
	>
		<Col
			type="flex"
			justify="center"
			style={{
				textAlign: "center",
			}}
			xs={{ span: 22 }}
			sm={{ span: 22 }}
			md={{ span: 20 }}
			lg={{ span: 18 }}
			xl={{ span: 16 }}
			{...props}
		>
			<Row
			type={centerHorizontal? "flex" : null}
			justify={centerHorizontal? "center" : null}
			>
				{children}
			</Row>
		</Col>
	</Row>
)

export default AlignCenter
