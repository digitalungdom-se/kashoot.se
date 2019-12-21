import React from 'react'
import { Col, Row, Icon } from 'antd'

import { AlignCenter, VerticalLine } from "../Components/General"
import { StyledTitle, StyledRedDiv } from "../Styling"

const Footer = () => {
  return (
    <StyledRedDiv style={{paddingBottom: 10}}>
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
            <p style={{marginBottom: 6}}>
              Killer.Games är en tjänst gjord av Digital Ungdom för
              dig som vill spela det älskade spelet "killer games".
              Tjänsten är <b>helt gratis</b> och open source -
              allt som behövs för att skapa ett spel är ett konto.
            </p>
          </Col>
          <Col
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <StyledTitle style={{fontSize: 18}}>
              Kontakt
            </StyledTitle>
            <p style={{marginBottom: 6}}>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:styrelse@digitalungdom.se"
              className="topFooterLink"
              >
                <Icon type="mail" style={{marginRight: 6}}/>
                styrelse@digitalungdom.se
              </a>
            </p>
          </Col>
          <Col
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <StyledTitle style={{fontSize: 18}}>
              Utveckla
            </StyledTitle>
            <p style={{marginBottom: 6}}>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/digitalungdom-se/kashoot.se"
              className="topFooterLink"
              >
                <Icon type="github" style={{marginRight: 6}}/>
                GitHub
              </a>
            </p>
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
           <p style={{marginBottom: 6}}>
            Killer.Games 2019
           </p>
         </Col>
       </Row>
     </AlignCenter>
   </StyledRedDiv>
  )
}

export default Footer
