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
import Slider1 from './App/Container/Slider/Slider';
import Counter from './App/Container/Counter/Counter';
import { Provider } from 'react-redux';
import { configureStore } from './App/Redux/store';
import Rating from './App/Container/rating/Rating';
import { NavigationContainer } from '@react-navigation/native';
import SubCategories2 from './App/Container/subcategory/SubCategories2';
import ProductCard from './App/Container/productcard/ProductCard';
import Favoritespage from './App/Container/favoritespage/FavoritesPage';
import AddShipingAddress from './App/Container/AddShipingAddress/AddShipingAddress';
import Filter from './App/Container/filter/Filter';
import Bottomtab from './App/Navigator/Bottomtab';
import CategoriesTwo from './App/Container/categorys/CategoriesTwo';
import My_Orders from './App/Container/myorder/My_Orders';
import My_Bag from './App/Container/mybag/My_Bag';
import My_Profile from './App/Container/myprofile/My_Profile';
import Success from './App/Container/Success/Success';
import My_profilee from './App/Container/myorder/My_Orders';
import My_Oeders from './App/Container/myprofile/My_Profile';


export default function App() {
  const store = configureStore()
  return (

    <Provider store={store}>
      {/* <Text style={{fontFamily:'Metropolis-Light',fontSize:90}}>App</Text>
      <FontAwesome name="facebook-square" size={50} color="red"/> */}
      <NavigationContainer>
        <Bottomtab/>
      </NavigationContainer>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Forgot/> */}
      {/* <HomePage/> */}
      {/* <Womens_top/> */}
      {/* <Favorites/> */}
      {/* <OrderDetails /> */}
      {/* <ShippingAddresses/> */}
      {/* <Slider1/> */}
      {/* <Counter/> */}
      {/* <Rating/> */}
      {/* <SubCategories2/> */}
      {/* <ProductCard/> */}
      {/* <Filter/> */}
      {/* <AddShipingAddress/> */}
      {/* <Favoritespage /> */}
      {/* <CategoriesTwo/> */}
      {/* <My_profilee/> */}
      {/* <My_Bag/> */}
      {/* <My_Oeders/> */}
      {/* <Success/> */}
    </Provider>
  )
}