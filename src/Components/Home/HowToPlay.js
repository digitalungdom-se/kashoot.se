import React from "react"
import { Col, Row } from "antd"
// Custom components
import {
  StyledDiv,
  StyledTitle,
  StyledATag,
  graphicProfile
} from "../../Styling"
import { AlignCenter } from "../General"

const step = (title, text, offset=0) => (
  <Col span={24}>
    <Col
      offset={offset}
      span={12}
      style={{
        textAlign: "center",
        marginBottom: -20
      }}
    >
      <StyledTitle style={{marginBottom: 0}}>
        {title}
      </StyledTitle>
      <p
        style={{
          color: graphicProfile.colors.black,
          fontSize: 15,
        }}
        >
        {text}
      </p>
    </Col>
  </Col>
)

const Home = () => {
  return(
    <StyledDiv style={{marginTop: 40, paddingBottom: 100}}>
      <AlignCenter
        xs={{ span: 22 }}
  			sm={{ span: 22 }}
  			md={{ span: 16 }}
  			lg={{ span: 14 }}
  			xl={{ span: 12 }}
      >
        <StyledTitle style={{width: "100%"}}>
          Vad är Killer.Games?
        </StyledTitle>
        <div>
          <p style={{
            fontSize: 16,
            width: "60%",
            color: graphicProfile.colors.black,
            margin: "auto"
          }}>
            <b>Killer.Games</b> är en gratis tjänst, gjord av
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://digitalungdom.se"
                style={{ color: graphicProfile.colors.mainRed }}
              >
                {" Digital Ungdom"}
              </a>
            , för dig som vill
            spela det klassiska spelet "killer game" - att skapa
            och spela ett spel är otroligt enkelt:
          </p>
        </div>

        <Row style={{marginTop: 50, width: "100%"}}>
          {
            step(
              <>
                <span style={{fontSize: 40, marginRight: 10}}>
                  1.
                </span>
                Skapa ett konto och spel
              </>,
              <p>
                Du som vill arrangera ett spel börjar med att skapa
                ett gratiskonto. När du är inloggad kan du enkelt
                anordna ett spel med egna regler.
                <StyledATag href="/admin-guide"> Läs mer här.
                </StyledATag>
              </p>
            )
          }
          {
            step(
              <>
                <span style={{fontSize: 40, marginRight: 10}}>
                  2.
                </span>
                Deltagare anmäler sig
              </>,
              <p>
                Innan spelet börjar behöver alla som vill vara med
                anmäla sig. När någon anmält sig kan angagören enkelt
                generera en unik kod till dem som kommer användas i
                spelet.
                <StyledATag href="/admin-guide"> Läs mer här.
                </StyledATag>
              </p>,
              12
            )
          }
          {
            step(
              <>
                <span style={{fontSize: 40, marginRight: 10}}>
                  3.
                </span>
                Starta spelet!
              </>,
              <p>
                När alla har anmält sig kan arrangören starta spelet.
                Nu ska alla deltagare hitta och eliminera sin sitt
                offer, men samtidigt akta sig för personer som är
                ute efter dem själva...
              </p>,
            )
          }
          {
            step(
              <>
                <span style={{fontSize: 40, marginRight: 10}}>
                  4.
                </span>
                Sist kvar vinner
              </>,
              <p>
                När det endast är en spelare kvar vinner den spelaren.
                Ifall arrangörerna tagit betalt för deltagande kan
                vinnaren till och med vinna en häftig summa pengar!
              </p>,
              12,
            )
          }
        </Row>
      </AlignCenter>
    </StyledDiv>
  )
}

export default Home
