import styled from "styled-components"

const SlantedDiv = styled.div`
  background-color: ${props => props.theme.colors.mainRed};
  height: 500px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 56%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);
  background-image: linear-gradient(
    -345deg,
    ${props => props.theme.colors.orange},
    ${props => props.theme.colors.mainRed}
  );
`
export default SlantedDiv
