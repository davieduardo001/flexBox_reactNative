import React from 'react'
import { View } from 'react-native'

/**
        flex: 1 2 3 4 (proporcional)
        flexDirection: 'row' 'row-reverse' 'column' 'column-reverse' 
        justifyContent: 'flex-start' 'flex-end' 'center' 'space-between' 'space-around'
        alignItems: 'flex-start' 'flex-end' 'center' 'stretch' 'baseline' (ajusta no eixo secundario {o contrario do justify})
        se o flexDirection == row { justifyContent == row, alignItems == column}
**/

const App = () => {
  return (

      
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',}}>

        <View style={{width: 50, height: 50, backgroundColor: 'powderblue', flex: 2}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue', flex: 4}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue', flex: 3}} />

      </View>
    )
} 

export default App