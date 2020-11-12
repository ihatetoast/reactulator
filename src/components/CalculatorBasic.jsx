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
    width: 400px;
    padding: 1em;
    background: #dedede;
`


class CalculatorBasic extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "", 
            currentEntry:"",
            isEvaluated: false
        }

    }
    concatInput=(val)=>{
        let runningVal = "";

        // this.setState({
        //     input: this.state.input + val,
        // });
        console.log(runningVal);
    }

    handleEqual=()=>{
        const evalInput = math.evaluate(this.state.input);
        this.setState({
            input:evalInput,
            currentEntry:"",
            isEvaluated: true
        })
    }
    handleZero=(val)=>{
       if(!this.state.isEvaluated && this.state.input !== ""){
        this.setState({input: this.state.input + val})
       }
       return;
    }

    render() {

    
        return (
            <div>
                <Screen>{this.state.input}</Screen>
                <ButtonsWrapper>
                    <ButtonRow>
                        <ButtonKey val={"7"} handleClick={this.concatInput}>7</ButtonKey>
                        <ButtonKey val={"8"} handleClick={this.concatInput}>8</ButtonKey>
                        <ButtonKey val={"9"} handleClick={this.concatInput}>9</ButtonKey>
                        <ButtonKey val={"/"} handleClick={this.concatInput}>/</ButtonKey>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"4"} handleClick={this.concatInput}>4</ButtonKey>
                        <ButtonKey val={"5"} handleClick={this.concatInput}>5</ButtonKey>
                        <ButtonKey val={"6"} handleClick={this.concatInput}>6</ButtonKey>
                        <ButtonKey val={"*"} handleClick={this.concatInput}>x</ButtonKey>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"1"} handleClick={this.concatInput}>1</ButtonKey>
                        <ButtonKey val={"2"} handleClick={this.concatInput}>2</ButtonKey>
                        <ButtonKey val={"3"} handleClick={this.concatInput}>3</ButtonKey>
                        <ButtonKey val={"-"} handleClick={this.concatInput}>-</ButtonKey>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"."} handleClick={this.concatInput}>.</ButtonKey>
                        <ButtonKey val={"0"} handleClick={this.handleZero}>0</ButtonKey>
                        <ButtonKey val={"="} handleClick={this.handleEqual}>=</ButtonKey>
                        <ButtonKey val={"+"} handleClick={this.concatInput}>+</ButtonKey>
                    </ButtonRow>
                    <div>
                        <ClrButton handleClear={()=>this.setState({input: "", isEvaluated: false})}>Clear</ClrButton>
                    </div>
                </ButtonsWrapper>
            </div>
        )
    }
}


export default CalculatorBasic