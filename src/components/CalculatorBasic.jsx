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
        this.setState({
            input: this.state.currentEntry + val,
        });

        // this.setState({
        //     input: this.state.input + val,
        // });
    
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
                        <ButtonKey val={"8"} face={"8"} handleClick={this.concatInput}/>
                        <ButtonKey val={"7"} face={"7"} handleClick={this.concatInput}/>
                        <ButtonKey val={"9"} face={"9"} handleClick={this.concatInput}/>
                        <ButtonKey val={"/"} face={"/"} handleClick={this.concatInput}/>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"5"} face={"5"} handleClick={this.concatInput}/>
                        <ButtonKey val={"4"} face={"4"} handleClick={this.concatInput}/>
                        <ButtonKey val={"6"} face={"6"} handleClick={this.concatInput}/>
                        <ButtonKey val={"*"} face={"x"} handleClick={this.concatInput}/>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"1"} face={"1"} handleClick={this.concatInput}/>
                        <ButtonKey val={"2"} face={"2"} handleClick={this.concatInput}/>
                        <ButtonKey val={"3"} face={"3"} handleClick={this.concatInput}/>
                        <ButtonKey val={"-"} face={"-"} handleClick={this.concatInput}/>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"."} face={"."} handleClick={this.concatInput}/>
                        <ButtonKey val={"0"} face={"0"} handleClick={this.handleZero}/>
                        <ButtonKey val={"="} face={"="} handleClick={this.handleEqual}/>
                        <ButtonKey val={"+"} face={"+"} handleClick={this.concatInput}/>
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