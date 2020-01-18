import React from "react"
import { Col } from "antd"
// Custom components
import { GamesTable } from "../Components/Admin"
import { AlignCenter } from "../Components/General"
import { Theme } from "../Styling"
import { BrightWrapper } from "../Wrappers"
import { lightTheme } from "../Styling/Themes"

const AdminPage = () => {
  return(
    <Theme theme={lightTheme}>
      <AlignCenter
        xs={{ span: 24 }}
        sm={{ span: 23 }}
        md={{ span: 22 }}
        lg={{ span: 22 }}
        xl={{ span: 20 }}
      >
        <GamesTable/>
      </AlignCenter>
    </Theme>
  )
}

export default AdminPage
