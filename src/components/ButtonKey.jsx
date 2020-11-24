import React from 'react'
import styled from 'styled-components';

const StyledButtonKey = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${props => props.buttontype === "operator" ? "#F0C808" : "#07A0C3"};
    color: ${props => props.buttontype === "operator" ? "#000" : "#fff"};
    font-size: 2em;
    line-height: 2em;
    height: 2em;
    width: 2em;
`
const isNotOp = value =>{
    return !isNaN(value) || value === "=" || value === ".";
}
const ButtonKey = props =><StyledButtonKey onClick={()=>props.handleClick(props.val)} buttontype={`${isNotOp(props.val) ? null : "operator"}`}>{props.face}</StyledButtonKey>


export default ButtonKey;