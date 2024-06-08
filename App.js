import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Signup from './App/Container/Signup/Signup';
import Login from './App/Container/Login/Login';
import Forgot from './App/Container/Forgot/Forgot';
import HomePage from './App/Container/HomePage/HomePage';
import Womens_top from './App/Container/Womens_tops/Womens_top';
import Favorites from './App/Container/Favorites/Favorites';
import OrderDetails from './App/Container/OrderDetails/OrderDetails';
import ShippingAddresses from './App/Container/ShippingAddresses/ShippingAddresses';


export default function App() {
  return (
    <>
      {/* <Text style={{fontFamily:'Metropolis-Light',fontSize:90}}>App</Text>
      <FontAwesome name="facebook-square" size={50} color="red"/> */}

      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Forgot/> */}
      {/* <HomePage/> */}
      {/* <Womens_top/> */}
      {/* <Favorites/> */}
      {/* <OrderDetails /> */}
      <ShippingAddresses/>
    </>
  )
}