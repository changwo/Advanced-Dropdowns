import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import {ReactComponent as PlusIcon} from "../../icons/plus.svg";
import {ReactComponent as BellIcon} from "../../icons/bell.svg";
import {ReactComponent as MessengerIcon} from "../../icons/messenger.svg";
import {ReactComponent as CaretIcon} from "../../icons/caret.svg";
import DropDownMenu from "./DropDownMenu";

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

const NavBar = ({toggleButton}) => {

    return (
        <Nav>
            <ul>
                <NavItem icon={<PlusIcon/>}/>
                <NavItem icon={<BellIcon/>}/>
                <NavItem icon={<MessengerIcon/>}/>
                <NavItem  icon={<CaretIcon/>}>
                    <DropDownMenu toggleButton={toggleButton}/>
                </NavItem>
            </ul>
        </Nav>
    );
}

export default NavBar
