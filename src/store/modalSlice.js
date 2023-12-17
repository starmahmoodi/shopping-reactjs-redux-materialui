import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    data: []
}

const modalSlice = createSlice({

    name: 'modal',
    initialState,
    reducers: {
        modalIsOn: {
            reducer (state, action){
                state.status = true;
                state.data = action.payload;
            },
            prepare (item) {
                return {
                    payload: {
                        item
                    }
                }
            }
        },
        modalIsOff: state =>{
            state.status = false
        }
    }
})

export default modalSlice.reducer;
export const { modalIsOn, modalIsOff } = modalSlice.actions;