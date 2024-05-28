import { View, Text, StatusBar, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


export default function HomePage() {
  return (
    <ScrollView style={styles.container}>

      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.background}>
        <ImageBackground style={styles.background} source={require('../../../assets/img/pexels-godisable-jacob-226636-896293.jpg')} />
        <View style={styles.textsale}>

          <Text style={styles.sale}>Fashion Sale</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 14, color: 'white', }}>Check</Text>
          </TouchableOpacity>
        </View>

      </View>


    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',

  },
  background: {
    width: '100%',
    height: 600,

  },
  sale: {
    color: 'white',
    fontSize: 53,
    fontFamily: 'Metropolis-Bold',
    marginLeft: 10,
    width: '64%'
  },
  textsale: {
    position: 'absolute',
    bottom: 50,
    
  },
  button: {
    height: 36,
    width: 150,
    backgroundColor: '#DB3022',
    color: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10

  }

})