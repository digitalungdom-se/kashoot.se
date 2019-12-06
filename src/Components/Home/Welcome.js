import React from "react"
import { Row, Col, Button } from "antd"

import {
  TransparentDiv,
  SlantedDiv,
  StyledTitle,
  graphicProfile
} from "../../Styling"
import { VerticalLine } from "../General"
import { CodeInput } from "../Forms"

const Home = () => {
  return(
    <SlantedDiv>
      <Row
        type="flex"
        justify="center"
        style={{paddingTop: 50}}
      >
        <Col
          xs={24}
          sm={14}
          md={11}
          lg={9}
          xl={7}
        >
          <TransparentDiv>
            <StyledTitle style={{marginBottom: 10}}>
              Joining a game?
            </StyledTitle>
            <CodeInput
              to="/player-page"
              description={
                <p style={{color: graphicProfile.colors.white}}>
                  {"Enter your six-digit code provided " +
                  "by your game's host below."}
                </p>
              }
            />

            <VerticalLine/>

            <StyledTitle style={{marginBottom: 10}}>
              Own or want to host a game?
            </StyledTitle>
            <Row
              type="flex"
              justify="center"
              gutter={10}
              style={{marginBottom: 20}}
            >
              <Button style={{width: "45%"}}>
                Host a game
              </Button>
              <p style={{margin: "5px 2%"}}>
                or
              </p>
              <Button
                href="https://digitalungdom.se/logga-in"
                style={{width: "45%"}}
              >
                Sign in
              </Button>
            </Row>
          </TransparentDiv>
        </Col>
      </Row>
    </SlantedDiv>
  )
}

export default Home
