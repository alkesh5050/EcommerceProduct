import { combineReducers } from "redux";
import counterSlice from "../slice/counter.slice";
import categorySlice from "../slice/category.slice";



export const rootReducer=combineReducers({ 
    count: counterSlice,
    category: categorySlice
})