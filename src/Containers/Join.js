import React from "react"
import { Row, Col } from "antd"
// Custom components
import {
  StyledTitle,
  TransparentDiv,
  graphicProfile
} from "../Styling"
import {
  AlignCenter
} from "../Components/General"
import { CodeInput } from "../Components/Forms"

const Join = () => {
  return(
    <AlignCenter style={{marginTop: "10vh"}}>
      <Col
        xs={24}
        sm={14}
        md={11}
        lg={9}
        xl={7}
      >
        <TransparentDiv
          style={{
            color: graphicProfile.colors.black,
            border: "1px solid",
            borderColor: graphicProfile.colors.lightGrey,
          }}
        >
          <StyledTitle
            style={{
              marginBottom: 10,
              color: graphicProfile.colors.mainRed
            }}
          >
            Join game
          </StyledTitle>
          <CodeInput
            to="/player-page"
            description={
              <p style={{color: graphicProfile.colors.grey}}>
                Enter your six-digit code provided
                by your game host below.
              </p>
            }
          />

          <div
            style={{
              textAlign: "left",
              opacity: 0.6,
              fontSize: 12,
            }}
          >
            <Row
              type="flex"
              justify="center"
              style={{marginBottom: 16, marginRight: 20}}
            >
              <a
                style={{
                  color: graphicProfile.colors.black,
                  fontWeight: "bold",
                }}
              >
                Host a game
              </a>
              <p style={{margin: "1px 10px"}}>
                {"•"}
              </p>
              <a
                href="https://digitalungdom.se/logga-in"
                style={{
                  color: graphicProfile.colors.black,
                  fontWeight: "bold",
                }}
              >
                Sign in
              </a>
            </Row>
          </div>
        </TransparentDiv>
      </Col>
    </AlignCenter>
  )
}

export default Join
