import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Container/HomePage/HomePage';
import Favorites from '../Container/Favorites/Favorites';
import OrderDetails from '../Container/OrderDetails/OrderDetails';
import Login from '../Container/Login/Login';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FavoritesStack, HomeStack, My_BagStack, My_ProfileStack, shopStack } from './StackNavigator';
import SubCategories2 from '../Container/subcategory/SubCategories2';
import My_Bag from '../Container/mybag/My_Bag';
import My_Profile from '../Container/myprofile/My_Profile';
import My_profilee from '../Container/myorder/My_Orders';


const Tab = createBottomTabNavigator();

export default function Bottomtab() {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HomeTab') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              }else if (route.name === 'My_BagTab') {
                iconName = focused ?  'shopping':'shopping-outline';
              }else if (route.name === 'shopTab') {
                iconName = focused ?  'cart':'cart-outline' ;
              }else if (route.name === 'FavoritesaTab') {
                iconName = focused ?  'cards-heart': 'cards-heart-outline';
              }else if (route.name === 'My_ProfileTab') {
                iconName = focused ? 'account-circle':'account-circle-outline';
              }
  
              return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home ',
                   
                }}
                name="HomeTab"
                component={HomeStack} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'My_Bag',
                }}
                name="My_BagTab" component={My_BagStack} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Shop',
                }}
                name="shopTab" component={shopStack} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'favorite',
                }}
                name="FavoritesaTab" component={FavoritesStack}

            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'My_Profile',
                  
                }}
                name="My_ProfileTab" component={My_ProfileStack} />
            {/* <Tab.Screen name="SubCategories2" component={SubCategories2} /> */}
        </Tab.Navigator>
    )
}