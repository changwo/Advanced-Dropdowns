import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: ${({theme}) => theme.pageColor};
      font-family: 'Poppins', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: all 0.50s linear;
    }
    
    ul {
      list-style: none;
    }
    
    a {
      color: ${props => props.theme.textColor};
      text-decoration: none;
    }
`;

export const darkTheme = { // The power of Styled Components really shines with the use of Global Themes, to quickly swap the color of your website within seconds
    bg: "#242526",
    bgAccent: "#484a4d",
    textColor: "#dadce1",
    navSize: "60px",
    border: "1px solid #474a4d",
    borderRadius: "8px",
    speed: "500ms",
    pageColor: "#151616",
};

export const lightTheme = { // The power of Styled Components really shines with the use of Global Themes, to quickly swap the color of your website within seconds
    bg: "#ffffff",
    bgAccent: "#c8c8c8",
    textColor: "#000000",
    navSize: "60px",
    border: "1px solid #c8c8c8",
    borderRadius: "8px",
    speed: "500ms",
    pageColor: "#e9e9e9",
};