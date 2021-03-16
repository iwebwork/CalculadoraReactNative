import React from 'react' 
import {SafeAreaView,TouchableOpacity,Text} from 'react-native' 

import {StyleSheet} from 'react-native';

export default props => {
    const texto = props.text

    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity 
                style={style.button}
            >
                <Text style={style.buttonText}>
                    {texto}
                </Text>
            </TouchableOpacity>            
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:0,
        justifyContent:'center',
        width:50,
        height:50,
        margin:1
    },
    button:{
        alignItems:'center',
        backgroundColor:'#0000ff'
    },
    buttonText: {
        fontSize:40,
        fontWeight:'400',
        color:'#FFFF',
        textAlign:'center'
    }
    
})