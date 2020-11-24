import React, {Component} from 'react'
import Screen from './Screen'
import ButtonKey from './ButtonKey'
import ClrButton from './ClrButton'
import styled from 'styled-components';
import * as math from 'mathjs';


const Calculator = styled.div`
    position: absolute;
    top: 8em;
`
const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6em;
`
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 315px;
    padding: 1em;
    background: #FFF1D0;
`


class CalculatorBasic extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "", 
            isEvaluated: false
        }

    }

    addToInput=(val)=>{
        // does not handle 2.3.4 but this is enough for me in a simple calc
        
        let lastClick = this.state.input.slice(-1);
        if (isNaN(val) && isNaN(lastClick)){
            return;
        
        }else{
            this.setState({
                input: this.state.input + val
            });
            console.log(lastClick)
        }
        
        

    }

    handleEqual=()=>{
        const evalInput = math.evaluate(this.state.input);
        
        this.setState({
            input:evalInput.toString(),
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
            <Calculator>
                <Screen>{this.state.input}</Screen>
                <ButtonsWrapper>
                    <ButtonRow>
                        <ButtonKey val={"8"} face={"8"} handleClick={this.addToInput}/>
                        <ButtonKey val={"7"} face={"7"} handleClick={this.addToInput}/>
                        <ButtonKey val={"9"} face={"9"} handleClick={this.addToInput}/>
                        <ButtonKey val={"/"} face={"/"} handleClick={this.addToInput}/>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"5"} face={"5"} handleClick={this.addToInput}/>
                        <ButtonKey val={"4"} face={"4"} handleClick={this.addToInput}/>
                        <ButtonKey val={"6"} face={"6"} handleClick={this.addToInput}/>
                        <ButtonKey val={"*"} face={"x"} handleClick={this.addToInput}/>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"1"} face={"1"} handleClick={this.addToInput}/>
                        <ButtonKey val={"2"} face={"2"} handleClick={this.addToInput}/>
                        <ButtonKey val={"3"} face={"3"} handleClick={this.addToInput}/>
                        <ButtonKey val={"-"} face={"-"} handleClick={this.addToInput}/>
                    </ButtonRow>
                    <ButtonRow>
                        <ButtonKey val={"."} face={"."} handleClick={this.addToInput}/>
                        <ButtonKey val={"0"} face={"0"} handleClick={this.handleZero}/>
                        <ButtonKey val={"="} face={"="} handleClick={this.handleEqual}/>
                        <ButtonKey val={"+"} face={"+"} handleClick={this.addToInput}/>
                    </ButtonRow>
                    <div>
                        <ClrButton handleClear={()=>this.setState({input: "", isEvaluated: false})}>Clear</ClrButton>
                    </div>
                </ButtonsWrapper>
            </Calculator>
        )
    }
}


export default CalculatorBasic