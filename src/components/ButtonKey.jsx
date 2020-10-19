import React from 'react'
import styled from 'styled-components';

const StyledButtonKey = styled.div`
    border-radius: 50%;
    background: lime;
    height: 5em;
    line-height: 5em;
    width: 5em;
`

const ButtonKey = (props) =>{
    return (
        <StyledButtonKey>
           {props.val} 
        </StyledButtonKey>
    )
}

export default ButtonKey;