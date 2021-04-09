import React from 'react' 
import {Text, Dimensions,TouchableHighlight} from 'react-native' 

import {StyleSheet} from 'react-native';

export default props => {
    const label = props.text

    return (
        <TouchableHighlight 
            onPress={() => props.OnClick(props.text)}
        >           
            {
                props.style === 'buttonOne'?
                    <Text style={[style.body, style.buttonOne]}>
                        {label}
                    </Text>:
                props.style === 'buttonDouble'?
                    <Text style={[style.body, style.buttonDouble]}>
                        {label}
                    </Text>:
                    <Text style={[style.body, style.buttonTree]}>
                        {label}
                    </Text>
            }
                
            
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    
    body:{
        fontSize:40,
        height:Dimensions.get('window').width / 4,
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:"#888"
    },

    buttonOne: {
        width:Dimensions.get('window').width / 4
    },

    buttonDouble:{
        width:(Dimensions.get('window').width / 4) * 2
    
    },
    buttonTree:{
        width:(Dimensions.get('window').width / 4) * 3
    }

    
})