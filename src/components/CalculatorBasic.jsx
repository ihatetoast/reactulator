import React, {Component} from 'react'
import Screen from './Screen'
import ButtonKey from './ButtonKey'
import ClrButton from './ClrButton'
import styled from 'styled-components';
import * as math from 'mathjs';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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
            isEvaluated: false
        }

    }

    addToInput=(val)=>{
        // does not handle 2.3.4 but this is enough for me in a simple calc
        const lastClick = this.state.input.slice(-1);
        if (isNaN(val) && isNaN(lastClick)){
            return;
            // this.setState({
            //     input: "Don't! Now press clear."
            // });
            // setTimeout(()=>{
            //     this.setState({
            //         input: "0"
            //     });
            // }, 2000);
        }else{
            this.setState({
                input: this.state.input + val
            });
        }
        
        

    }

    handleEqual=()=>{
        const evalInput = math.evaluate(this.state.input);
        this.setState({
            input:evalInput,
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
            </div>
        )
    }
}


export default CalculatorBasic