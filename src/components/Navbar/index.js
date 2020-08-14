import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: ${props => props.theme.navSize};
  background-color: ${props => props.theme.bg};
  padding: 0 1rem;
  border-bottom: ${props => props.theme.border};
  ul{
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

const NavBar = ({children}) => {

    return(
      <Nav>
          <ul>{children}</ul>
      </Nav>
    );
}

export default NavBar
