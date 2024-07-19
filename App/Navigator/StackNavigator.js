import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../Container/Favorites/Favorites';
import ProductCard from '../Container/productcard/ProductCard';
import HomePage from '../Container/HomePage/HomePage';

const Stack = createStackNavigator();

export const FavoritesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favourites" component={Favorites} />
            <Stack.Screen  name="Product" component={ProductCard} />
            
        </Stack.Navigator>
    )
}

export const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Product" component={ProductCard} />
        </Stack.Navigator>
    )
}

