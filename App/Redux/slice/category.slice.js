
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const intialState = {
    isLoading: false,
    categories: [],
    error: null
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        try {
            const Categorydata = [];
            await firestore()
                .collection('Category')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        Categorydata.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    });
                });
   
            return Categorydata
        } catch (error) {
            console.log(error);
        }
    },
)

export const categorySlice = createSlice({
    name: 'categories',
    initialState: intialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    },
})
export default categorySlice.reducer