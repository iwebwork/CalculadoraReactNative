import React, {Component} from 'react'
import {Text,SafeAreaView,TouchableOpacity} from 'react-native'


// Styles
import Body from '../assets/style'

import Edit from './Input'
import Btn from './Button'

export default class Calculadora extends Component {

    state = {
        input : ''
    }
    execute = (num) => {
        console.warn('foi numero ' + num)
    }

    changeText = (input) => {
        
    }

    render(){
        return(
            <>
                <SafeAreaView style={Body.title}>
                    <Text style={{fontSize:20}}>Bem vindo a calculadora</Text>
                </SafeAreaView>

                <SafeAreaView style={Body.body}>
                    <Edit text={this.state.body}/>
                    <Text style={Body.Preview}>Preview</Text>
                </SafeAreaView>

                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.execute('C')}
                        style={Body.container}
                    >
                        
                        <Btn 
                            text={'C'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('()')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'()'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('%')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'%'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('/')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'/'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.execute('7')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'7'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('8')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'8'}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('9')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'9'}
                        />    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('X')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'X'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.execute('4')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'4'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('5')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'5'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('6')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'6'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.execute('-')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'-'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        onPress={() => this.execute('1')}
                        style={Body.container}
                    >
                        <Btn 
                            text={'1'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.execute('2')}
                    >
                        <Btn 
                            text={'2'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.execute('3')}
                    >
                        <Btn 
                            text={'3'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.execute('+')}
                    >
                        <Btn 
                            text={'+'}
                        />
                    </TouchableOpacity>
                    
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.execute('+/-')}
                    >
                        <Btn 
                            text={'+/-'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.execute('0')}
                    >
                        <Btn 
                            text={'0'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.execute('.')}
                    >
                        <Btn 
                            text={'.'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Body.container}
                        onPress={() => this.execute('=')}
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