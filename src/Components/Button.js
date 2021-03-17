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
        width:'25%'
    },
    button:{
        alignItems:'center',
        backgroundColor:'#0000ff',
        margin:1,
    },
    buttonText: {
        fontSize:40,
        color:'#FFFF',
        alignItems:'center'
    }
    
})