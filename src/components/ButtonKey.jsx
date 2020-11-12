import React from 'react'
import styled from 'styled-components';

const StyledButtonKey = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${props => props.buttontype === "operator" ? "lime" : "rebeccapurple"};
    height: 5em;
    width: 5em;
`
const isNotOp = value =>{
    return !isNaN(value) || value === "=" || value === ".";
}
const ButtonKey = props =><StyledButtonKey onClick={()=>props.handleClick(props.val)} buttontype={`${isNotOp(props.val) ? null : "operator"}`}>{props.face}</StyledButtonKey>


export default ButtonKey;