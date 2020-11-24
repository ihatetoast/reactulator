import React from 'react'
import styled from "styled-components"
const StyledHeader = styled.header`
    background: #FFF;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #07A0C3;
    h1{
        color: #086788;
        font-size: 2em;
    }
`
const Header =() => {
    return (
        <StyledHeader>
            <h1>Reactulator</h1>
        </StyledHeader>
    )
}
export default Header