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
import { Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import My_profilee from '../Container/myorder/My_Orders';
import Rating from '../Container/rating/Rating';


const Stack = createStackNavigator();

function HeaderBarLeft({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            title="Cancel"
            color="#fff"
        ><MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
        </TouchableOpacity>
    )
}
function HeaderBarRight({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            title="Cancel"
            color="#fff"
            style={{ paddingRight: 17 }}
        ><MaterialIcons name="search" size={30} color="black" />
        </TouchableOpacity>
    )
}

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#F8F9FA' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },

        }}>
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Product"
                component={ProductCard}

                options={({ navigation }) => ({
                    headerLeft: () => (
                        <HeaderBarLeft navigation={navigation} />
                    )
                })}
            />
            <Stack.Screen
                name="My_Bag"
                component={My_Bag}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            {/* <Stack.Screen name="My_Oeders" component={My_Oeders} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} /> */}
            <Stack.Screen name="CategoriesTwo" component={CategoriesTwo} />
            <Stack.Screen name="AddShipingAddress" component={AddShipingAddress} />
            <Stack.Screen name="ShippingAddresses" component={ShippingAddresses} />
            <Stack.Screen 
            name="Success" 
            component={Success} 
            options={{
                headerLeft: () => (null)
            }} 
            />
            <Stack.Screen
                name="Home1"
                component={HomePage}

            />
        </Stack.Navigator>
    )
}

export const My_BagStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#F8F9FA' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },

        }}>
            <Stack.Screen
                name="My_Bag"
                component={My_Bag}
                options={({ navigation }) => ({
                    headerLeft: () => (

                        <HeaderBarLeft navigation={navigation} />
                    ),
                    headerRight: () => (
                        <HeaderBarRight navigation={navigation} />
                    )
                })}
            />
            <Stack.Screen
                name="AddShipingAddress"
                component={AddShipingAddress}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />

                })} />
            <Stack.Screen
                name="ShippingAddresses"
                component={ShippingAddresses}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="Success"
                component={Success}
                options={{
                    headerLeft: () => (null)
                }} 
            />
        </Stack.Navigator>
    )
}

export const shopStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#F8F9FA' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },

        }}>
            <Stack.Screen
                name="shop"
                component={SubCategories2}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <HeaderBarLeft navigation={navigation} />
                    ),
                    headerRight: () => (
                        <HeaderBarRight navigation={navigation} />
                    )
                })}
            />
            <Stack.Screen
                name="Filter"
                component={Filter}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="Product"
                component={ProductCard}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="My_Bag"
                component={My_Bag}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="AddShipingAddress"
                component={AddShipingAddress}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="ShippingAddresses"
                component={ShippingAddresses}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="Success"
                component={Success}
                options={{
                    headerLeft: () => (null)
                }} 
            />
            {/* <Stack.Screen name="My_Oeders" component={My_Oeders} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="CategoriesTwo" component={CategoriesTwo} /> */}
        </Stack.Navigator>
    )
}

export const FavoritesStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#F8F9FA' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },

        }}>
            <Stack.Screen
                name="Favourites"
                component={Favorites}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />

            <Stack.Screen
                name="Product"
                component={ProductCard}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="My_Bag"
                component={My_Bag}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            {/* <Stack.Screen   name="CategoriesTwo" component={CategoriesTwo} /> */}
            <Stack.Screen
                name="AddShipingAddress"
                component={AddShipingAddress}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="ShippingAddresses"
                component={ShippingAddresses}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <HeaderBarLeft navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="Success"
                component={Success}
                options={{
                    headerLeft: () => (null)
                }} />
        </Stack.Navigator>
    )
}


export const My_ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#F8F9FA' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },

        }}>
            <Stack.Screen
                name="My_profile"
                component={My_profilee}
                options={({ navigation }) => ({
                    headerLeft: () => (

                        <HeaderBarLeft navigation={navigation} />
                    ),
                    headerRight: () => (
                        <HeaderBarRight navigation={navigation} />
                    )
                })}
            />
            <Stack.Screen name="My_Oeders" component={My_Oeders} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="ShippingAddresses" component={ShippingAddresses} />
            <Stack.Screen name="Rating" component={Rating} />
        </Stack.Navigator>
    )
}