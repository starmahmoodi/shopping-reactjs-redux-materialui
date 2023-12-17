import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    totalQty: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action) {
                if (state.data.find(item => item.id === action.payload.id)) {
                    
                    state.data.map(item => {
                        if (item.id === action.payload.id) {
                            item.qty += action.payload.qty;
                        }
                        return item;
                    })
                } else {
                    state.data.push(action.payload);
                    state.totalQty += 1
                }

                state.totalPrice += action.payload.qty * action.payload.price
            },
            prepare(item, qty) {
                return {
                    payload: {
                        ...item,
                        qty,
                    }
                }
            }
        },increaseCartItem: {
            reducer(state, action) {
                state.data = state.data.map(item => {
                    if (item.id === action.payload.id) {
                        state.totalPrice += item.price
                        item.qty += 1;
                    }
                    return item;
                })
            },
            prepare(id){
                return {
                    payload: {
                        id
                    }
                }
            }
        }
        ,decreaseCartItem: {
            reducer(state, action) {
                const existedItem = state.data.find(item => item.id === action.payload.id)
                if (existedItem && existedItem.qty === 1) {

                    if (state.data.length > 1) {
                        state.data = state.data.filter(item => item.id !== action.payload.id)
                        state.totalQty -= 1;
                        state.totalPrice -= existedItem.price;
                    }else if (state.data.length === 1) {
                        state.data = []
                        state.totalQty = 0;
                        state.totalPrice = 0;
                    }
                    
                }else {
                    state.data = state.data.map(item => {
                        if (item.id === action.payload.id) {
                            
                            item.qty -= 1;
                        }
                        return item;
                    })
                    state.totalPrice -= existedItem.price
                }
                
            },
            prepare(id){
                return {
                    payload: {
                        id
                    }
                }
            }
        },
        deleteCartItem: {
            reducer(state, action) {
                
                const existedItem = state.data.find(item => item.id === action.payload.id)

                if (existedItem) {
                    state.totalQty -= 1;
                    state.totalPrice = state.totalPrice - (existedItem.qty * existedItem.price)
                    if (state.data.length === 1) {
                        state.data = []
                    } else {
                        state.data = state.data.filter(item => item.id !== action.payload.id)
                    }
                    
                }

            },
            prepare(id) {
                return {
                    payload: {
                        id
                    }
                }
            }
        },
        clearCart: {
            reducer(state, action){
                state.data = []
                state.totalPrice = 0
                state.totalQty = 0
            },
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, deleteCartItem, clearCart, increaseCartItem, decreaseCartItem } = cartSlice.actions;