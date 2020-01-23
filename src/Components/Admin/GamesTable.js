import React, { useState } from "react"
import { Table, Badge, Button, Col, Row } from "antd"
// Custom
import {
  TransparentDivBorder,
  StyledTitle,
  StyledATag } from "../../Styling"
import { GamesTableRow, CreateGameModal } from "./"
import { AddPlayerForm } from "../Forms"
import { Modal } from "../General"

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
      let color;
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
        default:
          color = "white"
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
    status: "avslutad",
    playerData: playerData,
    playerEmail: true,
  },
  {
    key: '2',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    status: "redo att börja",
    playerData: playerData,
    playerEmail: true,
  },
  {
    key: '3',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    status: "redo att börja",
    playerData: playerData,
    playerEmail: true,
  },
  {
    key: '4',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    status: "avslutad",
    playerData: playerData,
    playerEmail: true,
  },
]

const addPlayer = () => {
  console.log("add player");
}

const deleteGame = () => {
  console.log("delete");
  // ADD REDUX to remove
}

const confirmStartGame = () => {
  console.log("sent");
  // ADD REDUX to re-render
}

const GamesTable = () => {
  const [modalVisible, showModal] = useState(false)
  const [deleteModalVisible, showDeleteModal] = useState(false)
  const [createModalVisible, showCreateModal] = useState(false)
  const [addPlayerModalVisible, showAddPlayerModal] = useState(false)

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
        <Col style={{marginTop: -5}}>
          <StyledATag
            onClick={() => showCreateModal(true)}
          >
            {"+  Skapa nytt spel"}
          </StyledATag>
        </Col>
      </Row>

      <Table
        size="middle"
        columns={gameColumn}
        expandRowByClick={true}
        expandedRowRender={data => (
          <GamesTableRow
            data={data}
            showModal={showModal}
            showAPM={showAddPlayerModal}
            showDeleteModal={showDeleteModal}
          />
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
        <CreateGameModal/>
      </Modal>

      <Modal
        title="Lägg till spelare"
        description={"Ange spelarens information, tryck " +
        "'nästa' och vänta tills en kod skapats till spelaren."}
        visible={addPlayerModalVisible}
        confirmText="Nästa"
        maxWidth={300}
        onCancel={()=> showAddPlayerModal(false)}
        handleConfirm={()=> {
          addPlayer()
          showAddPlayerModal(false)
        }}
      >
        <AddPlayerForm/>
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
