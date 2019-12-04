import React from "react"
import { Col, Row, Button } from 'antd'
import { NavLink } from "react-router-dom"

import { AlignCenter, Logo } from "../Components/General"
import "./Header.css"

const Header = () => {
  return(
    <AlignCenter
      style={{
        color: "#f5e9e9",
        backgroundColor: "#d92f10",
        padding: "12px 0"
      }}
    >
      <Row
        type="flex"
        justify="space-between"
      >
        <Col>
          <NavLink to="/">
            <Logo style={{fontSize: 30, color: "#f5e9e9"}}/>
          </NavLink>

        </Col>
        <Col type="flex">
          <Row
            type="flex"
            gutter={26}
            align="middle"
          >
            <Col>
              <NavLink to="/how-to-play" className="link">
                How to play
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/how-to-play" className="link">
                Host a game
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/about" className="link">
                About us
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/sign-in" className="link">
                Sign in
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/join" className="link">
                <Button>
                  <p style={{color: "#d92f10", fontWeight: "bold", marginTop: 4}}>
                    Join a game
                  </p>
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </AlignCenter>
  )
}

export default Header
