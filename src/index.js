import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyle} from "./style";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

