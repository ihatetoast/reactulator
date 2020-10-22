import { prodDependencies } from 'mathjs'
import React from 'react'
import styled from 'styled-components'
const CalculatorScreen = styled.div`
    border: 2px solid red;
    box-shadow:
    inset 0 0 2px 2px rgba(185,19,114, 0.9),
    inset 0 0 3px 5px rgba(107,15,26, 0.8);
    color: #fff;
    background: #0e0004;
    padding: 0.5em 0;
    width: 336px;
    font-size: 2em;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`
const Screen =(props)=> (<CalculatorScreen>{props.children}</CalculatorScreen>)

export default  Screen