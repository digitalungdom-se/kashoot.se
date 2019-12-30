import React from "react"
import { Button } from "antd"

const logo = require('../../Resources/DU_Logo.png');

const DUAuthButton = ({ href, text }) => {
  return(
    <Button
      href={href}
      size="large"
      style={{
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: 4,
        margin: "20px 0",
        height: 46,
        width: "100%",
        lineHeight: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }}>
      <img
        src={logo}
        alt="DU_Logo"
        style={{
          width: 25,
          borderRadius: 2,
        }}
      />
      <p
      style={{
        color: "rgba(0,0,0,0.76)",
        fontSize: 12,
        margin: "1px 0 0 10px"
        }}
      >
        { text }
      </p>
    </Button>
  )
}

export default DUAuthButton
