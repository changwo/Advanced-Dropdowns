import React from "react";
import styled from "styled-components";
import { ReactComponent as CogIcon } from '../../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../icons/chevron.svg';


const DropDown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: ${props => props.theme.bg};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  overflow: hidden;
`
const Item = styled.a`
  span{
    
  }
`
const IconLeft = styled.span``
const IconRight = styled.span``

const DropDownMenu = (props) => {


    return (
        <DropDown>
            <DropDownItem>My Profile</DropDownItem>
            <DropDownItem
                leftIcon={<CogIcon/>}
                rightIcon={<ChevronIcon/>}>

            </DropDownItem>
        </DropDown>
    )
}

const DropDownItem = ({children, leftIcon, rightIcon}) => {
    return (
        <Item href="#">
            <IconLeft>{leftIcon}</IconLeft>
            {children}
            <IconRight>{rightIcon}</IconRight>
        </Item>
    )
}

export default DropDownMenu;