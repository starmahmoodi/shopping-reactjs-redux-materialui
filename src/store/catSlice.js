import { createSlice } from "@reduxjs/toolkit";
import laptop from '../assets/images/laptop.jpeg'
import smartphone from '../assets/images/smartphone.jpeg'
import fragrances from '../assets/images/fragrances.jpeg'
import furniture from '../assets/images/furniture.jpeg'
import sunglasses from '../assets/images/sunglasses.jpeg'


const initialState = {
    data: [
        {
            id: 'smartphones',
            name: 'Smart Phone',
            image: `${smartphone}`,
        },
        {
            id: 'laptops',
            name: 'Laptop',
            image: `${laptop}`, 
        },
        {
            id: 'fragrances',
            name: 'Fragrances',
            image: `${fragrances}`, 
        },
        {
            id: 'furniture',
            name: 'Furniture',
            image: `${furniture}`, 
        },
        {
            id: 'sunglasses',
            name: 'Sunglasses',
            image: `${sunglasses}`, 
        },
    ],
    categoryMenuIsShown: false,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryMenuHandler: (state, action) =>{
            state.categoryMenuIsShown = !state.categoryMenuIsShown
        }
    },
})

export default categorySlice.reducer;
export const selectAllCategories = (state => state.category.data);
export const { categoryMenuHandler } = categorySlice.actions;
