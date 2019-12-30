import React from "react"
// Custom components
import { Emoji, VerticalLine } from "../Components/General"
import { BrightWrapper } from "../Wrappers"
import { StyledTitle, graphicProfile } from "../Styling"
import { CodeInput } from "../Components/Forms"

const PlayerPage = () => {

  // TODO: Replace this placeholder
  const targetName = "Kelvin John"

  return(
    <BrightWrapper>
      <StyledTitle style={{ fontSize: 22, marginBottom: 4 }}>
        <Emoji emoji="🐺"/>
          Välkommen tillbaka
        <Emoji emoji="🦈"/>
      </StyledTitle>
      <p style={{marginTop: -4}}>
        Du ska fånga...
      </p>
      <StyledTitle
        style={{
          fontSize: 38,
          color: "black",
          marginTop: -6
        }}
      >
        {targetName}
      </StyledTitle>

      <VerticalLine dark={true}/>

      <StyledTitle
        style={{
          color: graphicProfile.colors.mainRed,
          marginBottom: 4,
          fontSize: 22,
        }}
      >
        {"Fångat " + targetName + "?"}
      </StyledTitle>

      <CodeInput
        description={
          "Ange " + targetName + "s kod i fältet nedanför."
        }
      />
    </BrightWrapper>
  )
}

export default PlayerPage
