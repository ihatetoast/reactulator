import React from 'react'
import styled from "styled-components"

const ClearButton = styled.div`
    background: #DD1C1A;
    font-size: 2em;
    color: #fff;
    height: 2em;
    display: flex;
    align-items: center;
    border-radius: 2em;
    justify-content: center;
`
const ClrButton =(props)=> {
    return (
        <ClearButton onClick={props.handleClear}>
            {props.children}
        </ClearButton>
    )
}
export default  ClrButton