import React, {Component} from 'react'
import Screen from './Screen'
import ButtonKey from './ButtonKey'
import ClrButton from './ClrButton'
import styled from 'styled-components';
import * as math from 'mathjs';

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
`
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 336px;
    background: #dedede;
`


class CalculatorBasic extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "0"
        }

    }
   
    render() {
        console.log(math.evaluate('12 / (2.3 + 0.7)'))
    
        return (
            <div>
                <Screen>{this.state.input}</Screen>
                <ButtonsWrapper>
                    <ButtonRow>
                        <ButtonKey val={"7"}>7</ButtonKey>
                        <ButtonKey val={"8"}>8</ButtonKey>
                        <ButtonKey val={"9"}>9</ButtonKey>
                        <ButtonKey val={"/"}>/</ButtonKey>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"4"}>4</ButtonKey>
                        <ButtonKey val={"5"}>5</ButtonKey>
                        <ButtonKey val={"6"}>6</ButtonKey>
                        <ButtonKey val={"x"}>x</ButtonKey>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"1"}>1</ButtonKey>
                        <ButtonKey val={"2"}>2</ButtonKey>
                        <ButtonKey val={"3"}>3</ButtonKey>
                        <ButtonKey val={"-"}>-</ButtonKey>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"."}>.</ButtonKey>
                        <ButtonKey val={"0"}>0</ButtonKey>
                        <ButtonKey val={"="}>=</ButtonKey>
                        <ButtonKey val={"+"}>+</ButtonKey>
                    </ButtonRow>
                    <div>
                        <ClrButton handleClear={()=>this.setState({input: "0"})}>Clear</ClrButton>
                    </div>
                </ButtonsWrapper>
            </div>
        )
    }
}


export default CalculatorBasic