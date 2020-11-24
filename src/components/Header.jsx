import React from 'react'
import styled from "styled-components"
import '../fonts.css'
const StyledHeader = styled.header`
    font-family: "Indie Flower", cursive;
    background: #FFF;
    width: 100%;
    height: 7em;
    text-align: center;
    border-bottom: 1px solid #07A0C3;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    div {
        justify-self: flex-end;
        text-align:left;
        padding: 0 0.5em;
        p{
            color: #086788;
            margin:  0;
        }
    }
    h1{
        margin: 0 0 -.5em 0;
        align-self: flex-end;
        display:inline-block;
        flex:8;
    }
   
`
const Header =() => {
    var today  = new Date();

    return (
        <StyledHeader>
         <h1>Reactulator</h1>
            <div>
                <p>Katy Cassidy</p>
                <p>React 101, Ms. Covidia</p>
                <p>{today.toLocaleDateString("en-US")}</p>
            </div>
           
        </StyledHeader>
    )
}
export default Header