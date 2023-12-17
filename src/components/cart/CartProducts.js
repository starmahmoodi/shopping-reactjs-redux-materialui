import { Stack, Typography } from '@mui/material'
import React from 'react'
import CartProduct from './CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, increaseCartItem, decreaseCartItem } from '../../store/cartSlice'

const CartProducts = () => {

    const allCartProducts = useSelector(state => state.cart.data)
    const dispatch = useDispatch()

    let content;

    content = allCartProducts.map(item => (
        <CartProduct 
            key={item.id}
            item={item}
            deleteCartItem={() => dispatch(deleteCartItem(item.id))}
            increaseCartItem={() => dispatch(increaseCartItem(item.id))}
            decreaseCartItem={() => dispatch(decreaseCartItem(item.id))}
        />
    ))


  return (
    <Stack
        sx={{
            bgcolor: 'transparent',
            flexDirection: {
                xs: 'column'
            },
            margin: {
                xs: '25px 0 20px 0'
            }
        }}
    >
        {allCartProducts.length > 0 && content}
        {allCartProducts.length === 0 && 
            <Typography
                color='cartRedButton.main'
                sx={{
                    fontSize: {
                        xs: '16px'
                    },
                    fontWeight: {
                        xs: '600'
                    },
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                No Items Found!
            </Typography>
        }
    </Stack>
  )
}

export default CartProducts