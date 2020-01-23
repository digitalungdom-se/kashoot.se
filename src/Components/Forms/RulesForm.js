import React from "react"
import { Form, Input, Checkbox, Row, Col, Tabs } from "antd"
import { withRouter } from "react-router-dom"
// Custom components
import { StyledText, StyledTitle } from "../../Styling"

const formItemProps = {
  style: {
    margin: 0,
  }
}
const smallTitleStyle = {
  style: {
    fontSize: 20,
    color: "#575757",
    margin: 0,
  }
}

class RulesForm extends React.Component {
  state = {
    haveOwnRules: false,
    haveSafeZones: false,
  }

  setSafeZones = e => {
  this.setState(
      { haveSafeZones: e.target.checked }, () => {
        this.props.form.validateFields(['safeZones'],
        { force: true })
      }
    )
  }

  setOwnRules = e => {
  this.setState(
      { haveOwnRules: e.target.checked }, () => {
        this.props.form.validateFields(['ownRules'],
        { force: true })
      }
    )
  }

  render = () => {
    const { getFieldDecorator } = this.props.form
    return(
      <Form>
        {
          this.state.haveOwnRules ? null : (
            <div style={{marginBottom: 20}}>
              <StyledTitle {...smallTitleStyle}>
                Regel-mallar
              </StyledTitle>
              <StyledText>
                Ifall du inte vill skapa egna regler kan du välja
                en av tre redan färdigställda regeluppsättningar.
                Ta en du gillar och starta spelet!
              </StyledText>
              <Form.Item {...formItemProps}>
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Classic" key="1">
                    Game hosts (also called umpires or referees) begin by advertising that a game is being set up and instruct potential players to send in their personal details. Once enough players have signed up, the game host assigns targets to the players. A player is usually told the personal details of their target as collected by the game host. The aim of the game is for players to track down and eliminate their targets until only one player remains. When a player eliminates their target, they get the victim's target(s). Only one assassin can kill a target at a time. If only one player remains, the game is over.
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Oxford" key="2">
                    Oxford University plays by a ruleset where the game runs for a week and the players respawn, usually after 12 hours; the aim of the game is to collect as many points from kills as possible. The respawn means events are organised during the game to capture specific points.A player is usually told the personal details of their target as collected by the game host. The aim of the game is for players to track down and eliminate their targets until only one player remains. When a player eliminates their target, they get the victim's target(s). Only one assassin can kill a target at a time. If only one player remains, the game is over.
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Basilisk" key="3">
                    Basilisk rules count simply looking in the eyes of the target as a successful assassination. Some rule sets require photographic proof that a true sighting occurred.A player is usually told the personal details of their target as collected by the game host. The aim of the game is for players to track down and eliminate their targets until only one player remains. When a player eliminates their target, they get the victim's target(s). Only one assassin can kill a target at a time. If only one player remains, the game is over.
                  </Tabs.TabPane>
                </Tabs>
              </Form.Item>
            </div>
          )
        }
        <Form.Item {...formItemProps}>
          <Row type="flex" align="middle" gutter={10}>
            <Col>
              <StyledTitle {...smallTitleStyle}>
                Egna regler
              </StyledTitle>
            </Col>
            <Col>
              <Checkbox
                style={{marginBottom: 4}}
                checked={this.state.haveOwnRules}
                onChange={this.setOwnRules}
              >
                Använd egna regler
              </Checkbox>
            </Col>
          </Row>
        </Form.Item>
        {
          this.state.haveOwnRules?
          (
            <div style={{marginBottom: 20}}>
              <StyledText>
                I fältet nedanför kan du skriva regler för hur spelare
                ska eliminera varandra.
                <br/>
                Spelarna kommer kunna se det du skriver i fältet
                nedanför.
              </StyledText>
              <Form.Item {...formItemProps}>
                {getFieldDecorator('ownRules', {
                  rules: [
                    {
                      required: true,
                      message: 'Ange egna regler'
                    },
                  ],
                })(
                  <Input.TextArea
                    rows={4}
                    style={{ width: "100%" }}
                    autoComplete="off"
                    placeholder={"Behöver spelare ropa något " +
                    "innan de eliminerar någon? Finns det ett " +
                    "avstånd spelare behöver " +
                    "vara ifrån varandra innan de börjar jaga" +
                    "varandra? Etc."}
                  />
                )}
              </Form.Item>
            </div>
          )
          :
          null
        }
        <Form.Item {...formItemProps}>
          <Row type="flex" align="middle" gutter={10}>
            <Col>
              <StyledTitle {...smallTitleStyle}>
                Säkra Områden
              </StyledTitle>
            </Col>
            <Col>
              <Checkbox
                style={{marginBottom: 4}}
                checked={this.state.haveSafeZones}
                onChange={this.setSafeZones}
              >
                Spela med säkra områden
              </Checkbox>
            </Col>
          </Row>
        </Form.Item>
        {
          // If the admin wants safe zones, show the safezone input
          this.state.haveSafeZones?
          (
            <div style={{marginBottom: 20}}>
              <StyledText>
                Säkra områden är platser där spelare inte kan
                eliminera varandra. Ett förslag är matsalen.
                <br/>
                Spelarna kommer kunna se det du skriver i fältet
                nedanför.
              </StyledText>
              <Form.Item {...formItemProps}>
                {getFieldDecorator('safeZones', {
                  rules: [
                    {
                      required: true,
                      message: 'Ange säkra områden'
                    },
                  ],
                })(
                  <Input
                    style={{ width: "100%" }}
                    autoComplete="off"
                    placeholder="Område 1, område 2, ..."
                  />
                )}
              </Form.Item>
            </div>
          )
          :
          null
        }
      </Form>
    )
  }
}

export default withRouter(Form.create()(RulesForm))
