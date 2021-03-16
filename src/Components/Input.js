import React from 'react' 
import {Keyboard, TextInput, TouchableWithoutFeedback} from 'react-native' 

import {StyleSheet} from 'react-native';

export default props => {

    const texto = props.text

    return (
        <>
            <TextInput 
                showSoftInputOnFocus={false}
                style={style.input}
                value={texto}
            />
        </>
    )
}

const style = StyleSheet.create({
    input: {
        fontSize:30,
    }
    
})