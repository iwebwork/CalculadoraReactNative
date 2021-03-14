import React, { Component } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';


export default class App extends Component{

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text>Bem vindo a calculadora</Text>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  }
})