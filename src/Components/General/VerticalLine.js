import React from 'react'

const VerticalLine = ({ style, dark }) => {
	return (
  	<div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: dark?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)"
      }}
    />
	)
}

export default VerticalLine
