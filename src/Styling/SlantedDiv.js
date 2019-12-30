import styled from "styled-components"

const SlantedDiv = styled.div`
  background-color: ${props => props.theme.mainBGColor};
  height: 580px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 56%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);
  background-image: linear-gradient(
    -352deg,
    ${props => props.theme.secondaryBGColor},
    ${props => props.theme.mainBGColor}
  );
`
export default SlantedDiv
