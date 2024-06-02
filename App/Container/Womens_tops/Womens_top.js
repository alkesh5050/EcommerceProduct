import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale } from '../../../assets/matrix/Metrics';

export default function Womens_top() {
  return (
    <ScrollView style={styles.container}>
       <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
    <FontAwesome name="angle-left" size={45} color="black" />
    <FontAwesome style={{paddingTop:9}} name="search" size={25} color="black" />
    </View>
    <Text style={styles.fonts}>Women's tops</Text>


    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(19),
        backgroundColor: '#F9F9F9',
        paddingTop:horizontalScale(13)
    },
    fonts: {
        color: 'black',
        fontSize: 35,
        fontFamily: 'Metropolis-Bold',
        marginBottom: horizontalScale(40),
        marginTop: horizontalScale(35)
    },
});