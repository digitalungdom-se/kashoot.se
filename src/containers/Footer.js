import React from './node_modules/react'
import { Col, Row, Icon } from './node_modules/antd'

import { AlignCenter } from "../components/General"
import "./Footer.css"

const Footer = () => {
  return (
    <AlignCenter
      style={{
        backgroundColor: "#d92f10",
        paddingBottom: 10,
        color: "#f5e9e9",
      }}
    >
      <Row
        type="flex"
        justify="start"
        gutter={30}
        style ={{paddingTop: 30, paddingBottom: 20}}
      >
        <Col span={6}>
          <h3 style = {{marginBottom: 18}}>
            Om oss
          </h3>
          <p style={{marginBottom: 6}}>
            Kashoot är en digitaliserad version av det älskade sällskapsspelet
            "killer games". Tjänsten är <b>helt gratis</b> och open source -
            allt som behövs för att skapa ett spel är ett konto.
          </p>
        </Col>
        <Col span={6}>
          <h3 style = {{marginBottom: 18}}>
            Kontakt
          </h3>
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
        <Col span={6}>
          <h3 style = {{marginBottom: 18}}>
            Utveckla
          </h3>
          <p style={{marginBottom: 6}}>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/digitalungdom-se/"
            className="topFooterLink"
            >
              <Icon type="github" style={{marginRight: 6}}/>
              GitHub
            </a>
          </p>
        </Col>
      </Row>

      <Row type='flex' style={{borderTop: '1px solid white', paddingTop: 12, opacity: 0.5, fontSize: 12}}>
       <Col>
         <p style={{marginBottom: 6}}>
          Kashoot 2019
         </p>
       </Col>
     </Row>
   </AlignCenter>
  )
}

export default Footer
