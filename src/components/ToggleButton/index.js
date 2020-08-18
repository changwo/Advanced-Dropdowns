import React from "react";
import styled from "styled-components";

const BtnContainer = styled.div`
  width: 40px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 2px;
  border: ${(props) => (props.active ? "2px solid #43A047" : "2px solid #D33449")};
  transition: all 0.5s;
  background-color: ${(props) => (props.active ? "#43A047" : "none")};
  cursor: pointer;

`;

const ToggleBtn = styled.div`
  width: 8px;
  height: 8px;
  background: ${(props) => (props.active ? "white" : "#D33449 ")};
  border: none;
  border-radius: 50%;
  transform: ${(props) => (props.active ? "translate(24px, 0)" : "translate(0, 0)")};
  transition: 0.5s;
  cursor: pointer;
`;

const ToggleButton = ({theme, toggleTheme}) => {

    return (
        <BtnContainer onClick={toggleTheme} active={theme === 'light'}>
            <ToggleBtn active={theme === 'light'}/>
        </BtnContainer>
    );
};

export default ToggleButton;