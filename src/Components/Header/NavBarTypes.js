// Third party
import React from "react"
import { Col, Row, Button } from "antd"
import { NavLink } from "react-router-dom"
// Custom components
import { graphicProfile } from "../../Styling"

export const DefaultNavBar = ({ dropdownVisible, setDropVisible }) => (
  <Col type="flex">
    <Row
      type="flex"
      gutter={26}
      align="middle"
    >
      <Col>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to="/how-to-play"
        >
          Hur spelar man?
        </NavLink>
      </Col>
      <Col>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to="/signup"
        >
          Bli arrangör
        </NavLink>
      </Col>
      <Col>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to="/login"
        >
          Logga in
        </NavLink>
      </Col>
      <Col>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to="/join"
        >
          <Button>
            <p
              style={{
                color: graphicProfile.colors.mainRed,
                fontWeight: "bold",
                marginTop: 4
              }}
            >
              Delta i ett spel
            </p>
          </Button>
        </NavLink>
      </Col>
    </Row>
  </Col>
)

export const AdminNavBar = ({ dropdownVisible, setDropVisible }) => (
  <Col type="flex">
    <Row
      type="flex"
      gutter={26}
      align="middle"
      style={{height: 30}}
    >
      <Col>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to="/admin-guide"
        >
          Guide
        </NavLink>
      </Col>
      <Col>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to="/admin-page"
        >
          Dina spel
        </NavLink>
      </Col>
    </Row>
  </Col>
)
