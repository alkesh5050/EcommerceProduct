import { View, Text, StatusBar, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/matrix/Metrics'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>

      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.background}>
        <ImageBackground style={styles.background} source={require('../../../assets/img/pexels-godisable-jacob-226636-896293.jpg')} />
        <View style={styles.textsale}>

          <Text style={styles.sale}>Fashion Sale</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: moderateScale(14), color: 'white', }}>Check</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <View style={styles.view2}>
          <View >
            <Text style={styles.salefont}>Sale</Text>
            <Text style={{ color: '#B3B3B3' }}>super summer sale</Text>
          </View>
          <View>
            <Text style={styles.viewall}>View all</Text>
          </View>
        </View>

        <View>
          <ImageBackground style={styles.background1} source={require('../../../assets/img/AlanaCharmingScoopLaceChiffonMiniBridesmaidDresses-Pearl_Pink-1_5df3dfd7-bd0f-4362-ab16-1d1820dd8976_533x.webp')} />
          <View style={styles.iconview}>
           <FontAwesome name="star"  size={20} color="#FFBA49" />
           <FontAwesome name="star" size={20} color="#FFBA49" />
           <FontAwesome name="star" size={20} color="#FFBA49" />
           <FontAwesome name="star" size={20} color="#FFBA49" />
           <FontAwesome name="star" size={20} color="#FFBA49" />
          </View>

          <Text style={styles.textDorothy}>Dorothy Perkins</Text>
          <Text style={styles.textDress}>Evening Dress</Text>
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
    height: verticalScale(600),

  },
  background1: {
    width: horizontalScale(180),
    height: verticalScale(300),

  },
  sale: {
    color: 'white',
    fontSize: moderateScale(53),
    fontFamily: 'Metropolis-Bold',
    marginLeft: horizontalScale(10),
    width: '64%',
    padding: horizontalScale(10),
  },
  textsale: {
    position: 'absolute',
    bottom: verticalScale(50),

  },
  button: {
    height: verticalScale(36),
    width: horizontalScale(150),
    backgroundColor: '#DB3022',
    color: 'white',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: horizontalScale(10)

  },
  view2: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: horizontalScale(30),
    padding: horizontalScale(20),
  },
  salefont: {
    color: 'black',
    fontFamily: 'Metropolis-Bold',
    fontSize: moderateScale(45)
  },
  viewall: {
    color: 'black',
    paddingTop: horizontalScale(17)
  },
  textDorothy:{
    color:'#B3B3B3',
   
  },
  textDress:{
    color:'black',
    fontFamily: 'Metropolis-Bold',
    fontSize:moderateScale(20)
  },
  iconview:{
    flexDirection:'row',
    paddingBottom:9,
    paddingTop:7
  }
 })