import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {CSSTransition} from "react-transition-group";
import {ReactComponent as CogIcon} from '../../../icons/cog.svg';
import {ReactComponent as ChevronIcon} from '../../../icons/chevron.svg';
import {ReactComponent as BoltIcon} from '../../../icons/bolt.svg';
import {ReactComponent as ArrowIcon} from '../../../icons/arrow.svg';
import {ButtonOrSpan} from "../../../style/GlobalCSS";


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
  
  transition: height ${props => props.theme.speed} ease;
`
const MenuItem = styled.a`
  display: flex;
  height: 50px;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};
  transition: background ${props => props.theme.speed};
  padding: 0.5rem;
  :hover{
    background-color: #525357;
  }
`

const Box = styled.div`
  width: 100%;
`

const Transition = styled(CSSTransition)`
    &.menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
    }
  &.menu-primary-enter-active {
    transform: translateX(0%);
    transition: all ${props => props.theme.speed} ease;
  }
  &.menu-primary-exit {
    position: absolute;
  }
  &.menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all ${props => props.theme.speed} ease;
  }
  
   &.menu-secondary-enter {
    transform: translateX(110%);
    }
  &.menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all ${props => props.theme.speed} ease;
  }
  &.menu-secondary-exit {
  }
  &.menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all ${props => props.theme.speed} ease;
  }
`
const SpanLeft = styled.span`
  ${ButtonOrSpan};
  margin-right: 0.5rem;
`
const SpanRight = styled.span`
  margin-left: auto;
  svg {
    fill: ${props => props.theme.textColor};
    width: 20px;
    height: 20px;
  }
`

const DropDownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    const calcHeight = el => {
        console.log(el);
        const height = el.offsetHeight;
        console.log(height);
        setMenuHeight(height);
    }

    const DropDownItem = ({children, leftIcon, rightIcon, goToMenu}) => {
        return (
            <MenuItem href="#" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
                <SpanLeft>{leftIcon}</SpanLeft>
                {children}
                <SpanRight>{rightIcon}</SpanRight>
            </MenuItem>
        )
    }
    return (
        <DropDown style={{height: menuHeight}} ref={dropdownRef}>
            <Transition in={activeMenu === 'main'}
                           unmountOnExit
                           timeout={500}
                           classNames="menu-primary"
                           onEnter={calcHeight}>
                <Box>
                    <DropDownItem>My Profile</DropDownItem>
                    <DropDownItem
                        leftIcon={<CogIcon/>}
                        rightIcon={<ChevronIcon/>}
                        goToMenu="settings">
                        Settings
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={"🦧"}
                        rightIcon={<ChevronIcon/>}
                        goToMenu="animals">
                        Animals
                    </DropDownItem>
                </Box>
            </Transition>

            <Transition in={activeMenu === 'settings'}
                           unmountOnExit
                           timeout={500}
                           classNames="menu-secondary"
                           onEnter={calcHeight}>
                <Box>
                    <DropDownItem leftIcon={<ArrowIcon/>} goToMenu="main">
                        <h2>My Tutorial</h2>
                    </DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon/>}>HTML</DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon/>}>CSS</DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon/>}>JavaScript</DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon/>}>Awesome!</DropDownItem>
                </Box>
            </Transition>

            <Transition in={activeMenu === 'animals'}
                           unmountOnExit
                           timeout={500}
                           classNames="menu-secondary"
                           onEnter={calcHeight}>
                <Box>
                    <DropDownItem leftIcon={<ArrowIcon/>} goToMenu="main">
                        <h2>Animals</h2>
                    </DropDownItem>
                    <DropDownItem leftIcon="🦘">Kangaroo</DropDownItem>
                    <DropDownItem leftIcon="🐸">Frog</DropDownItem>
                    <DropDownItem leftIcon="🦋">Horse</DropDownItem>
                    <DropDownItem leftIcon="🦔">Hedgehog</DropDownItem>
                </Box>
            </Transition>
        </DropDown>
    )
}


export default DropDownMenu;