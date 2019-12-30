import React from "react"
import { Col, Row, Button } from 'antd'
import { NavLink } from "react-router-dom"
// Custom components
import { AlignCenter, Logo } from "../Components/General"
import { StyledDiv } from "../Styling"

const Header = () => {
  return(
    <StyledDiv style={{padding: "12px 0"}}>
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
                  Hur spelar man?
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/signup">
                  Bli arrangör
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/login">
                  Logga in
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/join">
                  <Button>
                    <p style={{fontWeight: "bold", marginTop: 4}}>
                      Delta i ett spel
                    </p>
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </AlignCenter>
    </StyledDiv>
  )
}

export default Header
