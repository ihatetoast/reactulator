import React from 'react'
import styled from "styled-components"
const StyledHeader = styled.header`
    background: #FFF;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #07A0C3;
    display:flex;
    
    justify-content: flex-end;
    div {
        text-align:left;
        padding: 1em; 

    }
   p{
        color: #086788;
        margin: 0.2em 0;
    }
`
const Header =() => {
    var today  = new Date();

    return (
        <StyledHeader>
            <div>
                <p>Katy Cassidy</p>
                <p>React 101</p>
                <p>Ms. Covidia</p>
                <p>{today.toLocaleDateString("en-US")}</p>
            </div>
        </StyledHeader>
    )
}
export default Header