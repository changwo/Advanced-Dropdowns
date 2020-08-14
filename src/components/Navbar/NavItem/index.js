import React, {useState} from "react";
import styled from "styled-components";
import {ButtonOrSpan} from "../../../style/GlobalCSS";

const Li = styled.li`
  width: calc(${props => props.theme.navSize} * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Icon = styled.a`
  ${ButtonOrSpan}
`

const NavItem = ({icon, children}) => {
    const [open, setOpen] = useState(false);

    return (
        <Li>
            <Icon href="#" onClick={() => setOpen(!open)}>
                {icon}
            </Icon>
            {open && children}
        </Li>
    )
}

export default NavItem;