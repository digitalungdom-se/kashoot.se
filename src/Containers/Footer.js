import React from 'react'
import { Col, Row, Icon } from 'antd'

import { AlignCenter, VerticalLine } from "../Components/General"
import { StyledTitle, StyledDiv, StyledText } from "../Styling"

const Footer = () => {
  return (
    <StyledDiv style={{paddingBottom: 10}}>
      <AlignCenter
        style={{
        }}
      >
        <Row
          type="flex"
          justify="start"
          gutter={30}
          style ={{
            paddingTop: 10,
            paddingBottom: 20,
            textAlign: "left"
          }}
        >
          <Col
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <StyledTitle style={{fontSize: 18}}>
              Om oss
            </StyledTitle>
            <StyledText style={{marginBottom: 6}}>
              Killer.Games är en tjänst gjord av Digital Ungdom för
              dig som vill spela det älskade spelet "killer games".
              Tjänsten är <b>helt gratis</b> och open source -
              allt som behövs för att skapa ett spel är ett konto.
            </StyledText>
          </Col>
          <Col
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <StyledTitle style={{fontSize: 18}}>
              Kontakt
            </StyledTitle>
            <StyledText style={{marginBottom: 6}}>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:styrelse@digitalungdom.se"
              >
                <Icon type="mail" style={{marginRight: 6}}/>
                styrelse@digitalungdom.se
              </a>
            </StyledText>
          </Col>
          <Col
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <StyledTitle style={{fontSize: 18}}>
              Utveckla
            </StyledTitle>
            <StyledText style={{marginBottom: 6}}>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/digitalungdom-se/kashoot.se"
              >
                <Icon type="github" style={{marginRight: 6}}/>
                GitHub
              </a>
            </StyledText>
          </Col>
        </Row>
        <VerticalLine/>
        <Row
          type='flex'
          style={{
            paddingTop: 12,
            opacity: 0.5,
            fontSize: 12
          }}
        >
         <Col>
           <StyledText style={{marginBottom: 6}}>
            Killer.Games 2019
           </StyledText>
         </Col>
       </Row>
     </AlignCenter>
   </StyledDiv>
  )
}

export default Footer
