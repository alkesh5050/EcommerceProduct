import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../Redux/slice/counter.slice';
import { fetchCategories } from '../../Redux/slice/category.slice';



export default function Counter() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [])



    const category = useSelector(state => state.category);

    console.log(category);

    const handleInc = () => {
        dispatch(increment())
    }

    const handleDec = () => {
        dispatch(decrement())
    }
    return (
        <View>
            <Text>Counterf</Text>
            {/* 1 */}
            <TouchableOpacity style={{ width: '50%', padding: 20, backgroundColor: 'blue', fontSize: '40' }} onPress={handleInc}>
                <Text>+</Text>
            </TouchableOpacity>

            {/* <Text>{counter.count}</Text> */}
            <TouchableOpacity style={{ width: '50%', padding: 20, backgroundColor: 'blue', fontSize: '40' }} onPress={handleDec}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    )
}