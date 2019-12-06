import React from "react"
import { Col, Row, Button } from 'antd'
import { NavLink } from "react-router-dom"
// Custom components
import { AlignCenter, Logo } from "../Components/General"
import { StyledRedDiv } from "../Styling"

const Header = () => {
  return(
    <StyledRedDiv style={{padding: "12px 0"}}>
      <AlignCenter centerHorizontal={false}>
        <Row
          type="flex"
          justify="space-between"
        >
          <Col>
            <NavLink to="/">
              <Logo
                style={{
                  fontSize: 30,
                  marginTop: 20, // Since lineheight in header is 0
                }}
              />
            </NavLink>

          </Col>
          <Col type="flex">
            <Row
              type="flex"
              gutter={26}
              align="middle"
            >
              <Col>
                <NavLink to="/how-to-play">
                  How to play
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/host-game">
                  Host a game
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/about">
                  About us
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/sign-in">
                  Sign in
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/join">
                  <Button>
                    <p style={{fontWeight: "bold", marginTop: 4}}>
                      Join a game
                    </p>
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </AlignCenter>
    </StyledRedDiv>
  )
}

export default Header
