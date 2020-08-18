import React from 'react';
import NavBar from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyle, lightTheme} from "./style";
import {useDarkMode} from "./customHooks";


const App = () => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if(!mountedComponent) return <div/>
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle/>
            <NavBar toggleButton={<ToggleButton theme={theme} toggleTheme={themeToggler}/>}/>
        </ThemeProvider>
    );
}
export default App;
