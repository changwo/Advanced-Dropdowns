import React, {useEffect, useRef, useState} from "react";
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
    const NavItemRef = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside, true); // destroys event listener when component is unmounted
        }
    }, [])

    const handleClickOutside = (event) => { // checks whether you're clicking on any point that isn't the dropdown
        const domNode = NavItemRef.current;
        if (!domNode || !domNode.contains(event.target)) {
            setOpen(false);
        }
    };

    return (
        <Li ref={NavItemRef}>
            <Icon href="#" onClick={() => setOpen(!open)}>
                {icon}
            </Icon>
            {open && children}
        </Li>
    )
}

export default NavItem;