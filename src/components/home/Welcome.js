import React from "react"
import { Row, Col } from "antd"

import "./Welcome.css"

const Home = () => {
  return(
    <div className="container">
      <div className="slant">
        <Row type="flex" justify="end">
          <Col span={8}>
            <div style={{flex: 1, background: "rgba(255,255,255,0.2)", borderRadius: 10, color: "white", marginTop: "20%", marginRight: "20%", padding: "6% 10%", textAlign: 'center'}}>
              <h1 style={{color: "white", fontSize: 26, marginBottom: 4}}>
                Joining a game?
              </h1>
              <p>
                Enter your six-digit code provided by your game host below.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
