import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider';

export default function Slider1() {
  const [range, setRange] = useState(0)
  return (
    <View style={{ flex: 1, backgroundColor: 'pink' ,alignItems:'center', justifyContent:'center'}}>
       <Text style={{ fontSize: 60, fontWeight: 'bold',color:'red',opacity:range }}>Slider</Text>
      <Text style={{ fontSize: 60, fontWeight: 'bold',color:'black' }}>{Math.floor(range*100)}</Text>
      <Slider
        style={{ width: 300, height: 70 }}
        minimumValue={0}
        maximumValue={1}
      onValueChange={(value)=>setRange(value)}

        thumbTintColor={'black'}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  )
}