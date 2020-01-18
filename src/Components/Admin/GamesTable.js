import React, { useState } from "react"
import {
  Table,
  Badge,
  Button,
  Col,
  Row,
  Checkbox,
} from "antd"
// Custom
import {
  TransparentDivBorder,
  StyledTitle,
  StyledText,
  graphicProfile
} from "../../Styling"
import { Modal, Emoji } from "../General"

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
const playerData = [
  {
    key: '1',
    namn: "Erica",
    klass: "Na20b",
    kod: "AC79PQ",
    redo: true,
    antalKills: 0,
    lever: false,
  },
  {
    key: '2',
    namn: "Peter",
    klass: "Na21c",
    kod: "9JSW62",
    redo: true,
    antalKills: 2,
    lever: true,
  },
  {
    key: '3',
    namn: "John",
    klass: "Sa20b",
    kod: "IKK291",
    redo: false,
    antalKills: 0,
    lever: false,
  },
  {
    key: '4',
    namn: "Peter 2",
    klass: "Na21c",
    kod: "IKA111",
    redo: true,
    antalKills: 0,
    lever: true,
  },
]

const gameColumn = [
  {
    title: 'Namn',
    dataIndex: 'namn',
    key: 'namn',
  },
  {
    title: 'Förening',
    dataIndex: 'förening',
    key: 'förening',
  },
  {
    title: 'Antal spelare',
    dataIndex: 'antal',
    key: 'antal',
    render: () => <span>{playerData.length}</span>
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: status => {
      let color = "white";
      switch (status) {
        case "pågående":
          color = "green"
          break;
        case "avslutad":
          color = "red"
          break;
        case "redo att börja":
          color = "yellow"
          break;
      }
      return(
        <span>
          <Badge color={color}/>
          {status}
        </span>
      )
    }
  },
]
const gameData = [
  {
    key: '1',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad",
    playerData: playerData
  },
  {
    key: '2',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 57,
    status: "redo att börja",
    playerData: playerData
  },
  {
    key: '3',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 129,
    status: "pågående",
    playerData: playerData
  },
  {
    key: '4',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad",
    playerData: playerData
  },
]

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
const divider = () => (
  <Col>
    <div style={{width: 1, height: "100%", background: "lightgrey"}}/>
  </Col>
)

const deleteGame = () => {
  console.log("delete");
}

const confirmStartGame = () => {
  console.log("sent");
  // ADD REDUX to re-render
}

const expandedRowRender = (data, showModal, showDeleteModal) => {
  if(data.status === "redo att börja"){
    return(
      <Row gutter={20}>
        <TableCol xlSpan={8}>
          <Col>
            <TabelTitle>
              Regler
            </TabelTitle>
            <StyledText>
              Bestäm regler för ditt nya spel.
            </StyledText>
          </Col>
        </TableCol>
        <TableCol xlSpan={11}>
          <TabelTitle>
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
        <TableCol xlSpan={5}>
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
        <TableCol xlSpan={8}>
          <Col>
            <TabelTitle>
              Regler
            </TabelTitle>
            <StyledText>
              Se vilka regler som användes i detta spel.
            </StyledText>
          </Col>
        </TableCol>
        <TableCol xlSpan={11}>
          <TabelTitle>
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
        <TableCol xlSpan={5}>
          <div>
            <TabelTitle>
              Radera spelet
            </TabelTitle>
            <StyledText>
              Vill du radera "{data.namn}"?
            </StyledText>
            <Button onClick={()=> showDeleteModal(true)}>
              Radera spelet
            </Button>
          </div>
        </TableCol>
      </Row>
    )
  }
}

const GamesTable = () => {
  const [modalVisible, showModal] = useState(false)
  const [deleteModalVisible, showDeleteModal] = useState(false)
  const [createModalVisible, showCreateModal] = useState(false)

  return(
    <TransparentDivBorder
      style={{
        margin: "4vh 0",
        padding: "2vh 2vh",
      }}
    >
      <Row
        type="flex"
        style={{margin: "6px 0 0 48px"}}
        gutter={20}
        align="middle"
      >
        <Col>
          <StyledTitle style={{margin: 0}}>
            Dina spel
          </StyledTitle>
        </Col>
        <Col>
          <Button
            style={{marginTop: -4}}
            onClick={() => showCreateModal(true)}
          >
            Skapa nytt spel
          </Button>
        </Col>
      </Row>
      <Table
        size="middle"
        columns={gameColumn}
        expandRowByClick={true}
        expandedRowRender={data => (
          expandedRowRender(data, showModal, showDeleteModal)
        )}
        dataSource={gameData}
        bordered={false}
        pagination={false}
        expandIcon={()=> <></>}
        style={{width: "100%"}}
      />
      <Modal
        title="Skapa nytt spel"
        visible={createModalVisible}
        confirmText="Skapa spelet"
        onCancel={()=> showCreateModal(false)}
        handleConfirm={()=> {
          confirmStartGame()
          showCreateModal(false)
        }}
      >
        hey
      </Modal>
      <Modal
        title="Säker?"
        description={"När du startat spelet kan du inte stoppa den."}
        visible={modalVisible}
        confirmText="Starta spelet"
        onCancel={()=> showModal(false)}
        handleConfirm={()=> {
          confirmStartGame()
          showModal(false)
        }}
      />
      <Modal
        title="Säker?"
        description={"All data försvinner när du raderat ett spel."}
        visible={deleteModalVisible}
        confirmText="Radera spelet"
        onCancel={()=> showDeleteModal(false)}
        handleConfirm={()=> {
          deleteGame()
          showDeleteModal(false)
        }}
      />
    </TransparentDivBorder>
  )
}

export default GamesTable
