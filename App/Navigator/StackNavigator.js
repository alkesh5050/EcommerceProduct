import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../Container/Favorites/Favorites';
import ProductCard from '../Container/productcard/ProductCard';
import HomePage from '../Container/HomePage/HomePage';
import My_Bag from '../Container/mybag/My_Bag';

const Stack = createStackNavigator();

export const FavoritesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    // title: 'My home',
                    headerStyle: {
                        backgroundColor: '#F5F5F5',
                    },
                    headerTintColor: 'black'
                }}
                name="Favourites" component={Favorites} />
                
            <Stack.Screen
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#0BA3FF',
                    },
                    headerTintColor: 'white'
                }}
                name="Product" component={ProductCard} />

        </Stack.Navigator>
    )
}

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen  name="Home" component={HomePage} />
            <Stack.Screen name="Product" component={ProductCard} />
            <Stack.Screen  name="My_Bag" component={My_Bag} />
            
        </Stack.Navigator>
    )
}
export const ProductStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen  name="Home" component={HomePage} /> */}
            <Stack.Screen name="Product" component={ProductCard} />
            <Stack.Screen  name="My_Bag" component={My_Bag} />
        </Stack.Navigator>
    )
}



