import React, {Component} from 'react'
import {Text,SafeAreaView,TouchableOpacity} from 'react-native'


// Styles
import Body from '../assets/style'

import Edit from './Input'
import Btn from './Button'

export default class Calculadora extends Component {

    /*
        Algoritmo:
        Pegar o conteudo do input
        Fazer um split aonde tem caracteres diferentes de numeros
        percorres este array e utilizar suas respectivas funções conforme necessario
    */ 
    
    state = {
        input : ''
    }
    execute = (num) => {
        console.warn('foi numero ' + num)
    }

    changeText = (value) => {
        const a = this.state.input + value
        // console.warn(value)
        this.setState({input: a})
    }

    clearText = () => {
        this.setState({input: ''})
    }

    parenteses = () => {
        const a = this.state.input.lastIndexOf('(')
        const b = this.state.input.lastIndexOf(')')

        if (a == b){
            this.setState({input : this.state.input + '('})
        }
        else if (a > b) {
            this.setState({input : this.state.input + ')'})
        }
        else if (a < b) {
            this.setState({input : this.state.input + '('})
        }
        
    }

    render(){
        return(
            <>
                <SafeAreaView style={Body.title}>
                    <Text style={{fontSize:20}}>Bem vindo a calculadora</Text>
                </SafeAreaView>

                <SafeAreaView style={Body.body}>
                    <Edit text={this.state.input}/>
                    <Text style={Body.Preview}>Preview</Text>   
                </SafeAreaView>

                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.clearText()}
                        style={Body.container}
                    >
                        
                        <Btn 
                            text={'C'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.parenteses()}
                        style={Body.container}
                    >
                        <Btn 
                            text={'()'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('%')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'%'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('/')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'/'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.changeText('7')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'7'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('8')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'8'}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('9')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'9'}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('X')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'X'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.changeText('4')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'4'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('5')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'5'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('6')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'6'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeText('-')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'-'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.changeText('1')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'1'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.changeText('2')}
                    >
                        <Btn 
                            text={'2'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.changeText('3')}
                    >
                        <Btn 
                            text={'3'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.changeText('+')}
                    >
                        <Btn 
                            text={'+'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.changeText('+/-')}
                    >
                        <Btn 
                            text={'+/-'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.changeText('0')}
                    >
                        <Btn 
                            text={'0'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.changeText('.')}
                    >
                        <Btn 
                            text={'.'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.changeText('=')}
                    >
                        <Btn 
                            text={'='}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                
            </>
        )
    }

}