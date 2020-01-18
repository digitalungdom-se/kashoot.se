// Third party
import React from "react"
import { Menu, Button, Dropdown, Icon } from "antd"
import { NavLink } from "react-router-dom"
// Custom components
import { StyledText, graphicProfile } from "../../Styling"

const DefaultDropDownMenu = (setDropVisible) => (
  <Menu>
    <ul style={{textAlign: 'center', padding: 0, paddingTop: 4}}>
      <li style={{ listStyleType: "none", margin: "4px 6px"}}>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to={"/how-to-play"}
          onClick={()=> setDropVisible(false)}
        >
          <StyledText>
            Hur spelar man?
          </StyledText>
        </NavLink>
      </li>
      <li style={{ listStyleType: "none", margin: "4px 6px"}}>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to={"/signup"}
          onClick={()=> setDropVisible(false)}
        >
          <StyledText>
            Bli arrangör
          </StyledText>
        </NavLink>
      </li>
      <li style={{ listStyleType: "none", margin: "4px 6px"}}>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to={"/login"}
          onClick={()=> setDropVisible(false)}
        >
          <StyledText>
            Logga in
          </StyledText>
        </NavLink>
      </li>
      <li style={{ listStyleType: "none", margin: "4px 6px"}}>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to="/join"
          onClick={()=> setDropVisible(false)}
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

export const DefaultDropDown =({ dropdownVisible, setDropVisible })=>(
  <Dropdown
    onClick={() => setDropVisible(true)}
    visible={dropdownVisible}
    overlay={() => DefaultDropDownMenu(setDropVisible)}
    trigger={['click']}
    placement="bottomRight"
  >
    <Icon type="menu" style={{fontSize: 18, margin: "6px 0"}}/>
  </Dropdown>
)

const AdminDropDownMenu = (setDropVisible) => (
  <Menu>
    <ul style={{textAlign: 'center', padding: 0, paddingTop: 4}}>
      <li style={{ listStyleType: "none", margin: "4px 6px"}}>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to={"/admin-page"}
          onClick={()=> setDropVisible(false)}
        >
          <StyledText>
            Dina spel
          </StyledText>
        </NavLink>
      </li>
      <li style={{ listStyleType: "none", margin: "4px 6px"}}>
        <NavLink
          activeStyle={{color: graphicProfile.colors.lightRed}}
          to={"/admin-guide"}
          onClick={()=> setDropVisible(false)}
        >
          <StyledText>
            Guide
          </StyledText>
        </NavLink>
      </li>
    </ul>
  </Menu>
)

export const AdminDropDown =({ dropdownVisible, setDropVisible })=>(
  <Dropdown
    onClick={() => setDropVisible(true)}
    visible={dropdownVisible}
    overlay={() => AdminDropDownMenu(setDropVisible)}
    trigger={['click']}
    placement="bottomRight"
  >
    <Icon type="menu" style={{fontSize: 18, margin: "6px 0"}}/>
  </Dropdown>
)
