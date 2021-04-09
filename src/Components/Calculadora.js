import React, {Component} from 'react'
import {SafeAreaView} from 'react-native'

// Styles
import Body from '../assets/style'

import Edit from './Input'
import Btn from './Button'


const inicialState = {
    displayValue:'0',
    clearDisplay:false,
    operation:null,
    values:[0,0],
    current:0
}

export default class Calculadora extends Component {
    
    state = {
        ...inicialState
    }

    changeText = value => {

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        
        if(value === '.' && !clearDisplay && !clearDisplay && this.state.displayValue.includes('.')){
            return 
        }
        
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + value

        // console.warn(displayValue)
        
        
        this.setState({
            displayValue: displayValue,
            clearDisplay:false
        })

        if(value !== '.'){
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue
            this.setState({
                displayValue: displayValue,
                clearDisplay:false,
                values
            })
        }
    }

    clearText = () => {
        this.setState({...inicialState})
    }

    setOperation = operation => {
        // console.warn(operation)
        if(this.state.current === 0){
            this.setState({
                operation, 
                clearDisplay:true,
                current:1,
            })
        }else {
            const equals = operation === '='
            console.warn(this.state.values)
            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
                // console.warn('foi '+ values[0] + this.state.operation + values[1])
            } catch (error) {
                values[0] = this.state.values[0]
                // console.warn('não ' + values)
            }
            values[1] = 0
            this.setState({
                displayValue:`${values[0]}`,
                operation:equals ? null : operation,
                current:equals ? 0 : 1,
                clearDisplay:!equals,
                values
            })
        }
    }

    render(){
        return(
            <>
                <SafeAreaView style={Body.body}>
                    <Edit 
                        text={this.state.displayValue}
                        // preview={this.state.displayPreview}
                    />                                                   
                </SafeAreaView>

                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'C'}
                        style={'bunttonTree'}
                        OnClick={this.clearText}
                    />
                    <Btn 
                        style={'buttonOne'}
                        text={'/'}
                        OnClick={this.setOperation}
                    />
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'7'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'8'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />    
                    <Btn 
                        text={'9'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />    
                    <Btn 
                        text={'X'}
                        style={'buttonOne'}
                        OnClick={this.setOperation}
                    />
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'4'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'5'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'6'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'-'}
                        style={'buttonOne'}
                        OnClick={this.setOperation}
                        
                    />
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'1'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'2'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'3'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'+'}
                        style={'buttonOne'}
                        OnClick={this.setOperation}

                    />
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'0'}
                        style={'buttonDouble'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'.'}
                        style={'buttonOne'}
                        OnClick={this.changeText}
                    />
                    <Btn 
                        text={'='}
                        style={'buttonOne'}
                        OnClick={this.setOperation}
                    />
                </SafeAreaView>
                
            </>
        )
    }

}