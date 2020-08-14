import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: #151616;
      font-family: 'Poppins', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    a {
      color: ${props => props.theme.textColor};
      text-decoration: none;
    }
`;

export const defaultTheme = { // The power of Styled Components really shines with the use of Global Themes, to quickly swap the color of your website within seconds
    bg: "#242526",
    bgAccent: "#484a4d",
    textColor: "#dadce1",
    navSize: "60px",
    border: "1px solid #474a4d",
    borderRadius: "8px",
    speed: "500ms",
};