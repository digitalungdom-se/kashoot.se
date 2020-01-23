import React from "react"
import { Table, Badge, Button, Col, Row } from "antd"
// Custom
import { StyledTitle, StyledText, StyledATag } from "../../Styling"
import { RulesForm } from "../Forms"

const generalPlayerInfo = [
  {
    title: 'Namn',
    dataIndex: 'namn',
    key: 'namn',
  },
  {
    title: 'Klass',
    dataIndex: 'klass',
    key: 'klass',
  },
  {
    title: 'Kod',
    dataIndex: 'kod',
    key: 'kod',
  },
]
const standbyPlayerInfo = [
  ...generalPlayerInfo,
  {
    title: 'Redo',
    key: 'redo',
    dataIndex: 'redo',
    render: status => {
      let color = status ? "green" : "red"
      let text = status ? "Ja" : "Nej"
      return(<span> <Badge color={color}/> {text} </span>)
    }
  }
]
const gamePlayerInfo = [
  ...generalPlayerInfo,
  {
    title: 'Antal kills',
    key: 'antalKills',
    dataIndex: 'antalKills',
  },
  {
    title: 'Lever',
    key: 'lever',
    dataIndex: 'lever',
    render: status => {
      let color = status ? "green" : "red"
      let text = status ? "Ja" : "Nej"
      return(<span> <Badge color={color}/> {text} </span>)
    }
  }
]

const updateRules = () => {
  console.log("update rules");
}

const TabelTitle = ({children}) => (
  <StyledTitle style={{margin: "0 0 10px 0", fontSize: 22}}>
    {children}
  </StyledTitle>
)
const TableCol = ({xlSpan = 8, children}) => (
  <Col
    lg={{ span: 22 }}
  	xl={{ span: xlSpan }}
    style={{marginBottom: 10}}
  >
    <Row type="flex" justify="space-between">
      {children}
    </Row>
  </Col>
)

const GamesTableRow = ({data, showModal, showAPM, showDelModal}) => {
  if(data.status === "redo att börja"){
    return(
      <Row gutter={20}>
        <TableCol xlSpan={11}>
          <Col>
            <TabelTitle>
              Regler
            </TabelTitle>
            <StyledText>
              Bestäm regler för ditt nya spel.
            </StyledText>
            <RulesForm/>
            <Button
              style={{marginTop: 10}}
              onClick={()=> updateRules()}
            >
              Uppdatera regler
            </Button>
          </Col>
        </TableCol>
        <TableCol xlSpan={13}>
          <Row>
            <div>
              <TabelTitle>
                Starta spelet
              </TabelTitle>
              <StyledText>
                Redo att starta spelet "{data.namn}"?
              </StyledText>
              <Button onClick={()=> showModal(true)}>
                Starta spelet
              </Button>
            </div>
          </Row>
          <Row
            type="flex"
            gutter={20}
            align="middle"
            justify="start"
            style={{width: "100%", marginTop: 40}}
          >
            <Col>
              <TabelTitle style={{margin: 0}}>
                Spelare
              </TabelTitle>
            </Col>
            <Col style={{marginTop: -14}}>
              <StyledATag
                onClick={() => showAPM(true)}
              >
                {"+  Lägg till spelare"}
              </StyledATag>
            </Col>
          </Row>
          <Table
            size="small"
            columns={standbyPlayerInfo}
            dataSource={data.playerData}
            bordered={false}
            style={{width: "100%"}}
          />
        </TableCol>
      </Row>
    )
  }
  if(data.status === "pågående"){
    return(
      <Row gutter={20}>
        <TableCol xlSpan={10}>
          <Col>
            <TabelTitle>
              Regler
            </TabelTitle>
            <StyledText>
              Byt regler under spelets gång. Spelarna får
              uppdateringar om regel-förändringar.
            </StyledText>
            <RulesForm/>
            <Button
              style={{marginTop: 10}}
              onClick={()=> updateRules()}
            >
              Uppdatera regler
            </Button>
          </Col>
        </TableCol>

        <TableCol xlSpan={14}>
          <TabelTitle>
            Spelare
          </TabelTitle>
          <Table
            size="small"
            columns={gamePlayerInfo}
            dataSource={data.playerData}
            bordered={false}
            style={{width: "100%"}}
          />
        </TableCol>
      </Row>
    )
  }
  if(data.status === "avslutad"){
    return(
      <Row gutter={20}>
        <TableCol xlSpan={10}>
          <Col>
            <TabelTitle>
              Regler
            </TabelTitle>
            <StyledText>
              Se vilka regler som användes i detta spel.
            </StyledText>
            <RulesForm/>
            <Button
              style={{marginTop: 10}}
              onClick={()=> updateRules()}
            >
              Uppdatera regler
            </Button>
          </Col>
        </TableCol>
        <TableCol xlSpan={14}>
          <div style={{width: "100%", marginBottom: 40}}>
            <TabelTitle>
              Radera spelet
            </TabelTitle>
            <StyledText>
              Vill du radera "{data.namn}"?
            </StyledText>
            <Button onClick={()=> showDelModal(true)}>
              Radera spelet
            </Button>
          </div>
          <TabelTitle style={{width: "100%"}}>
            Spelare
          </TabelTitle>
          <Table
            size="small"
            columns={standbyPlayerInfo}
            dataSource={data.playerData}
            bordered={false}
            style={{width: "100%"}}
          />
        </TableCol>
      </Row>
    )
  }
}

export default GamesTableRow
