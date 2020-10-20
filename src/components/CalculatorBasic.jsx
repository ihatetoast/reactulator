import React from 'react'
import Screen from './Screen'
import ButtonKey from './ButtonKey'
import ClrButton from './ClrButton'
import styled from 'styled-components';
import * as math from 'mathjs';

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    width: 25rem;
`
const  CalculatorBasic =() =>{
    console.log(math.evaluate('12 / (2.3 + 0.7)'))
    return (
        <div>
            <Screen />
            <ButtonRow>
                <ButtonKey val={"7"}/>
                <ButtonKey val={"8"}/>
                <ButtonKey val={"9"}/>
                <ButtonKey val={"+"}/>
            </ButtonRow>
            <ButtonRow>
                <ButtonKey val={"4"}/>
                <ButtonKey val={"5"}/>
                <ButtonKey val={"6"}/>
                <ButtonKey val={"-"}/>
            </ButtonRow>
            <ButtonRow>
                <ButtonKey val={"1"}/>
                <ButtonKey val={"2"}/>
                <ButtonKey val={"3"}/>
                <ButtonKey val={"*"}/>
            </ButtonRow>
            <ButtonRow>
                <ButtonKey val={"."}/>
                <ButtonKey val={"0"}/>
                <ButtonKey val={"="}/>
                <ButtonKey val={"+"}/>
            </ButtonRow>
            <div>
            <ClrButton />
            </div>
        </div>
    )
}
export default CalculatorBasic