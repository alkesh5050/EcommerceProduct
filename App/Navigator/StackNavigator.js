import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../Container/Favorites/Favorites';
import ProductCard from '../Container/productcard/ProductCard';
import HomePage from '../Container/HomePage/HomePage';
import My_Bag from '../Container/mybag/My_Bag';
import CategoriesTwo from '../Container/categorys/CategoriesTwo';
import AddShipingAddress from '../Container/AddShipingAddress/AddShipingAddress';
import ShippingAddresses from '../Container/ShippingAddresses/ShippingAddresses';
import My_Oeders from '../Container/myprofile/My_Profile';
import OrderDetails from '../Container/OrderDetails/OrderDetails';
import Success from '../Container/Success/Success';
import SubCategories2 from '../Container/subcategory/SubCategories2';
import Filter from '../Container/filter/Filter';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

function HomeBar({ navigation }) {
    return (

        <View style={{
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            ><MaterialIcons name="chevron-left" size={40} color="black" /></TouchableOpacity>
            <View ><Text style={{
              color:'black',
              fontFamily: 'Metropolis-Bold',
              color: '#222222',
              fontSize: 18,
              padding: 10,
            }}>home</Text></View>
            <TouchableOpacity style={{padding:10}}><FontAwesome name="search" size={22} color="black" /></TouchableOpacity>
        </View>


    );
}

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
            <Stack.Screen
                options={{
                    title: 'My CategoriesTwo',
                    headerStyle: {
                        backgroundColor: '#0BA3FF',
                    },
                    headerTintColor: 'white'
                }}
                name="CategoriesTwo" component={CategoriesTwo} />
            <Stack.Screen
                options={{
                    title: 'My AddShipingAddress',
                    headerStyle: {
                        backgroundColor: '#0BA3FF',
                    },
                    headerTintColor: 'white'
                }}
                name="AddShipingAddress" component={AddShipingAddress} />
            <Stack.Screen
                options={{
                    title: 'My ShippingAddresses',
                    headerStyle: {
                        backgroundColor: '#0BA3FF',
                    },
                    headerTintColor: 'white'
                }}
                name="ShippingAddresses" component={ShippingAddresses} />
        </Stack.Navigator>
    )
}

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen  name="Home" component={HomePage}  options={({ navigation }) => ({
                    headerTitle: () => <HomeBar navigation={navigation} /> })} />

            <Stack.Screen name="Product" component={ProductCard}  options={({ navigation }) => ({
                    headerTitle: () => <HomeBar navigation={navigation} />})} />
                    
            <Stack.Screen name="My_Oeders" component={My_Oeders} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="CategoriesTwo" component={CategoriesTwo} />
            <Stack.Screen name="AddShipingAddress" component={AddShipingAddress} />
            <Stack.Screen name="ShippingAddresses" component={ShippingAddresses} />
            <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
    )
}
export const My_BagStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My_Bag" component={My_Bag} />

        </Stack.Navigator>
    )
}

export const shopStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="shop" component={SubCategories2} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="Product" component={ProductCard} />
        </Stack.Navigator>
    )
}
