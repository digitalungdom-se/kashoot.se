import React from "react"

const Emoji = ({ emoji }) => {
  return(
    <span role="img" aria-label="label">
      {emoji}
    </span>
  )
}

export default Emoji
