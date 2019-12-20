import React from "react"
import { Row, Col, Button } from "antd"
import { NavLink } from "react-router-dom"
// Custom components
import {
  TransparentDiv,
  SlantedDiv,
  StyledTitle,
  graphicProfile
} from "../../Styling"
import { VerticalLine } from "../General"
import { CodeInput } from "../Forms"

const frontPage = require("./killergamesFrontpage.png")

const Home = () => {
  return(
    <SlantedDiv>
      <Row
        type="flex"
        justify="center"
        style={{paddingTop: 50}}
      >

        <Col span={12}>
          <div>
            <img
              src={frontPage}
              alt="frontPage"
              style={{width: "100%"}}
              />
          </div>
        </Col>

          <Col
            xs={24}
            sm={14}
            md={11}
            lg={9}
            xl={7}
          >
            <TransparentDiv>
              <StyledTitle style={{marginBottom: 10}}>
                Deltagare i ett spel?
              </StyledTitle>
              <CodeInput
                to="/player-page"
                description={
                  <p style={{color: graphicProfile.colors.white}}>
                    {"Ange din sexsiffriga kod som du " +
                    "fått av ditt spels arrangör."}
                  </p>
                }
              />
              <VerticalLine/>

              <StyledTitle style={{marginBottom: 10}}>
                Vill du arrangera ett spel?
              </StyledTitle>
              <p style={{color: graphicProfile.colors.white}}>
                Gör det nu gratis genom att skapa ett admin-konto
                eller logga in.
              </p>
              <Row
                type="flex"
                justify="space-between"
                style={{marginBottom: 20}}
              >
              <NavLink
                to="/signup"
                style={{width: "48.5%"}}
              >
                <Button style={{width: "100%"}}>
                  Bli arrangör
                </Button>
              </NavLink>
                <NavLink
                  to="/login"
                  style={{width: "48.5%"}}
                >
                  <Button style={{width: "100%"}}>
                    Logga in
                  </Button>
                </NavLink>
              </Row>
            </TransparentDiv>
          </Col>
      </Row>
    </SlantedDiv>
  )
}

export default Home
