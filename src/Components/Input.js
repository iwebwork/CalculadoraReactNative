import React, {Component} from 'react' 
import {TextInput, Text, setState} from 'react-native' 

import {StyleSheet} from 'react-native';

import {montarExpressao} from '../funcoes'

export default props => {

    return (
        <>
            <Text
                style={style.input}
            >
                {props.text}
            </Text>
            {/* <Text style={style.Preview}>{props.preview}</Text>    */}

        </>
    )
    
}

const style = StyleSheet.create({
    input: {
        flex:6,
        fontSize:60,
        backgroundColor:'#999',
        textAlign: 'center'
    },
    Preview:{
        flex:1,
        alignItems:'flex-end',
        textAlign:'right',
        fontSize:20,
        margin:2
    }
    
})