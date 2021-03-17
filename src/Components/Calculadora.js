import React, {Component} from 'react'
import {Text,SafeAreaView} from 'react-native'


// Styles
import Body from '../assets/style'

import Edit from './Input'
import Btn from './Button'

export default class Calculadora extends Component {

    render(){
        return(
            <>
                <SafeAreaView style={Body.title}>
                    <Text style={{fontSize:20}}>Bem vindo a calculadora</Text>
                </SafeAreaView>

                <SafeAreaView style={Body.body}>
                    <Edit text={'0'}/>
                    <Text style={Body.Preview}>Preview</Text>
                </SafeAreaView>

                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'C'}
                    />
                    <Btn 
                        text={'()'}
                    />
                    <Btn 
                        text={'%'}
                    />
                    <Btn 
                        text={'/'}
                    />
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'7'}
                    />
                    <Btn 
                        text={'8'}
                    />
                    <Btn 
                        text={'9'}
                    />
                    <Btn 
                        text={'X'}
                    />
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'4'}
                    />
                    <Btn 
                        text={'5'}
                    />
                    <Btn 
                        text={'6'}
                    />
                    <Btn 
                        text={'-'}
                    />
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'1'}
                    />
                    <Btn 
                        text={'2'}
                    />
                    <Btn 
                        text={'3'}
                    />
                    <Btn 
                        text={'+'}
                    />
                </SafeAreaView>
                <SafeAreaView style={Body.horizontal}>
                    <Btn 
                        text={'+/-'}
                    />
                    <Btn 
                        text={'0'}
                    />
                    <Btn 
                        text={'.'}
                    />
                    <Btn 
                        text={'='}
                    />
                </SafeAreaView>
                
            </>
        )
    }

}