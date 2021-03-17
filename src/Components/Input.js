import React from 'react' 
import {TextInput} from 'react-native' 

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
        flex:6,
        fontSize:60,
        backgroundColor:'#f34',
        textAlign: 'center'
    }
    
})