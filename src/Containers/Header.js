import React, { useState, useEffect } from "react"
import { Col, Row, Button, Dropdown, Menu, Icon } from 'antd'
import { NavLink } from "react-router-dom"
// Custom components
import { AlignCenter, Logo } from "../Components/General"
import {
  StyledDiv,
  StyledText,
  Theme,
  graphicProfile } from "../Styling"
import { lightTheme } from "../Styling/Themes"

const linksMenu = (setDropdownVisible) => (
  <Menu>
    <ul style={{textAlign: 'center', padding: 0, paddingTop: 4}}>
      <li style={{ listStyleType: "none", margin: "10px 0px"}}>
        <NavLink
          to={"/how-to-play"}
          onClick={()=> setDropdownVisible(false)}
        >
          <StyledText>
            Hur spelar man?
          </StyledText>
        </NavLink>
      </li>
      <li style={{ listStyleType: "none", margin: "10px 0px"}}>
        <NavLink
          to={"/signup"}
          onClick={()=> setDropdownVisible(false)}
        >
          <StyledText>
            Bli arrangör
          </StyledText>
        </NavLink>
      </li>
      <li style={{ listStyleType: "none", margin: "10px 0px"}}>
        <NavLink
          to={"/login"}
          onClick={()=> setDropdownVisible(false)}
        >
          <StyledText>
            Logga in
          </StyledText>
        </NavLink>
      </li>
      <li style={{ listStyleType: "none", margin: "10px 0px"}}>
        <NavLink
          to="/join"
          onClick={()=> setDropdownVisible(false)}
        >
          <Button>
            <StyledText style={{
                color: graphicProfile.colors.mainRed,
                fontWeight: "bold",
                marginTop: 4
              }}
            >
              Delta i ett spel
            </StyledText>
          </Button>
        </NavLink>
      </li>
    </ul>
  </Menu>
)

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // With hook determine width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {renderNavBar(windowWidth, dropdownVisible, setDropdownVisible)}
        </Row>
      </AlignCenter>
    </StyledDiv>
  )
}

function renderNavBar(windowWidth, dropdownVisible, setDropdownVisible){
  if(windowWidth > 650){
    return(
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
  }else{
    return(
      <Theme theme={lightTheme}>
        <Dropdown
          onClick={() => setDropdownVisible(true)}
          visible={dropdownVisible}
          overlay={() => linksMenu(setDropdownVisible)}
          trigger={['click']}
          placement="bottomRight"
        >
          <Icon type="menu" style={{fontSize: 18, margin: "6px 0"}}/>
        </Dropdown>
      </Theme>
    )
  }
}

export default Header
