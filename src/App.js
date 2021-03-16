import React from 'react'
import {Text,SafeAreaView} from 'react-native'

import Edit from './Components/Input'
import Btn from './Components/Button'


// Styles
import Body from './assets/style'

export default () => {
  return (
    <>
      <SafeAreaView style={Body.title}>
        <Text>Bem vindo a calculadora</Text>
      </SafeAreaView>

      <SafeAreaView style={Body.body}>
        <Edit text={'0'}/>
      </SafeAreaView>

      <SafeAreaView style={Body.body}>
        <Btn 
          text={'+'}
        />
        <Btn 
          text={'-'}
        />
      </SafeAreaView>
    </>
  )
}

