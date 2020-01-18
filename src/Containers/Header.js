// Thrid party components
import React, { useState, useEffect } from "react"
import { Col, Row } from 'antd'
import { NavLink } from "react-router-dom"
// Custom components
import { AlignCenter, Logo } from "../Components/General"
import {
  DefaultDropDown,
  AdminDropDown
} from "../Components/Header/NavDropDownTypes"
import {
  DefaultNavBar,
  AdminNavBar
} from "../Components/Header/NavBarTypes"
import { StyledDiv, Theme } from "../Styling"
import { lightTheme } from "../Styling/Themes"

const Header = () => {
  // Hook for drop down menu
  const [dropdownVisible, setDropVisible] = useState(false)

  // With hook determine width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {setWindowWidth(window.innerWidth)}
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  // TODO: Add redux
  // types: "default", "player", "admin"
  const navType = "admin"

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
          {
            windowWidth > 650 ?
              // If the screen is wider than 650 px, render a nav bar
              renderNavBar(
                dropdownVisible,
                setDropVisible,
                navType
              )
            :
              // If the screen is less than 650 px, render a drop down
              renderDropDown(
                dropdownVisible,
                setDropVisible,
                navType
              )
          }
        </Row>
      </AlignCenter>
    </StyledDiv>
  )
}

function renderNavBar(ddVisible, setDDVisible, navType){
  if(navType === "default"){
    return(
      <DefaultNavBar
        dropdownVisible={ddVisible}
        setDropVisible={setDDVisible}
      />
    )
  }
  if(navType === "admin") {
    return(
      <AdminNavBar
        dropdownVisible={ddVisible}
        setDropVisible={setDDVisible}
      />
    )
  }
}

function renderDropDown(ddVisible, setDDVisible, navType){
  if(navType === "default"){
    return(
      <Theme theme={lightTheme}>
        <DefaultDropDown
          dropdownVisible={ddVisible}
          setDropVisible={setDDVisible}
        />
      </Theme>
    )
  }
  if(navType === "admin"){
    return(
      <Theme theme={lightTheme}>
        <AdminDropDown
          dropdownVisible={ddVisible}
          setDropVisible={setDDVisible}
        />
      </Theme>
    )
  }
}

export default Header
