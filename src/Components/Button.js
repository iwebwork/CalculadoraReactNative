import React from 'react' 
import {SafeAreaView,Text} from 'react-native' 

import {StyleSheet} from 'react-native';

export default props => {
    const texto = props.text

    return (
        <SafeAreaView style={[style.button]}>            
                <Text style={style.buttonText}>
                    {texto}
                </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    
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