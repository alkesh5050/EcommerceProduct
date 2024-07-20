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
import { FavoritesStack, HomeStack } from './StackNavigator';
import SubCategories2 from '../Container/subcategory/SubCategories2';
import My_Bag from '../Container/mybag/My_Bag';


const Tab = createBottomTabNavigator();

export default function Bottomtab() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" color={color} size={size} />
                    )
                }}
                name="Home"
                component={HomeStack} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'My_Bag',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-bag" color={color} size={size} />
                    )
                }}
                name="My_Bag" component={My_Bag} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'OrderDetails',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="reorder" color={color} size={size} />
                    )
                }}
                name="OrderDetails" component={OrderDetails} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'favorite',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite" color={color} size={size} />
                    )
                }}
                name="Favoritesa" component={FavoritesStack}

            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'login',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="login" color={color} size={size} />
                    )
                }}
                name="Login" component={Login} />
            {/* <Tab.Screen name="SubCategories2" component={SubCategories2} /> */}
        </Tab.Navigator>
    )
}