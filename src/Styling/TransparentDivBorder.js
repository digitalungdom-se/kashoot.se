import styled from "styled-components"

const TransparentDivBorder = styled.div`
  flex: 1;
  background: rgba(255,255,255,0.2);
  border: 1px solid;
  border-color: ${props => props.theme.borderColor};
  border-radius: 10px;
  padding: 10px 30px;
  text-align: center;
`
export default TransparentDivBorder
