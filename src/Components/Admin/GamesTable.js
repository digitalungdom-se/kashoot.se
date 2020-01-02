import React from "react"
import { Table, Badge, Button } from "antd"
// Custom
import { graphicProfile, TransparentDivBorder } from "../../Styling"

const columns = [
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
        case "stand-by":
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
];

const data = [
  {
    key: '1',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad"
  },
  {
    key: '2',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 57,
    status: "stand-by"
  },
  {
    key: '3',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 129,
    status: "pågående"
  },
  {
    key: '4',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad"
  },
  {
    key: '5',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 57,
    status: "stand-by"
  },
  {
    key: '6',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 129,
    status: "pågående"
  },
  {
    key: '11',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad"
  },
  {
    key: '12',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 57,
    status: "stand-by"
  },
  {
    key: '13',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 129,
    status: "pågående"
  },
  {
    key: '14',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad"
  },
  {
    key: '15',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 57,
    status: "stand-by"
  },
  {
    key: '16',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 129,
    status: "pågående"
  },
  {
    key: '21',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad"
  },
  {
    key: '22',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 57,
    status: "stand-by"
  },
  {
    key: '23',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 129,
    status: "pågående"
  },
  {
    key: '24',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 291,
    status: "avslutad"
  },
  {
    key: '25',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 57,
    status: "stand-by"
  },
  {
    key: '26',
    namn: "Killer games vrg 2020",
    förening: "Viktor Rydberg Odenplan",
    antal: 129,
    status: "pågående"
  },
];

const expandedRowRender = () => (
  <div style={{width: "100%", background: "red"}}>
    Hey!
  </div>
)

const GamesTable = () => (
  <TransparentDivBorder
    style={{
      margin: "4vh 0",
      padding: "2vh 2vh",
    }}
  >
    <Table
      size="middle"
      columns={columns}
      expandRowByClick={true}
      dataSource={data}
      bordered={false}
      pagination={false}
      expandedRowRender={expandedRowRender}
      expandIcon={()=> <div style={{width: -100}}/>}
      expandRowByClick={true}
      style={{
        width: "100%"
      }}
    />
  </TransparentDivBorder>
)

export default GamesTable
