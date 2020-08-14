import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
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
    
    ::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }
    
    ::-webkit-scrollbar
    {
      width: 8px;
      background-color: #F5F5F5;
    }
    
    ::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
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