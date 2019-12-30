import { createGlobalStyle } from 'styled-components/macro';
import { graphicProfile } from "./"

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: "Roboto";
  }
  a{
    text-decoration: none;
  }
  h1, h2, h3 {
    font-weight: bold;
    font-style: normal;
  }
`;
