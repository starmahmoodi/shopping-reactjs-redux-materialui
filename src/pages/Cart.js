import { Stack, Typography } from '@mui/material'
import React from 'react'
import CartProducts from '../components/cart/CartProducts'
import ClearCartButton from './ClearCartButton'
import OrederSummery from '../components/cart/OrederSummery'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../store/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const totalQty = useSelector(state => state.cart.totalQty)

  return (
    <Stack
        width='100%'
        className='cart'
        sx={{
            flexDirection: {
                xs: 'column'
            },
            minHeight: '50vh',
        }}
    >   
        <Stack
            className='cart-details'
            sx={{
                flexDirection: {
                    xs: 'column',
                    lg: 'row'
                },
                justifyContent: {
                    xs: 'flex-start',
                    lg: 'center'
                },
                bgcolor: 'homePageGhostWhite.main',
                padding: {
                    xs: '40px 20px 0 20px',
                    lg: '40px 20px 40px 20px'
                },
                minHeight: '30vh',
                width: {
                    lg: '100%'
                },
                gap: {
                    lg: '5vw'
                }
            }}
        >
            <Stack
                className='cart-products-section'
                direction='column'
                justifyContent='flex-start'
                sx={{
                    minWidth: {
                        lg: '60vw',
                    }
                }}
            >
                <Typography
                    variant='h3'
                    color='productBlue.main'
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '700',
                        fontSize: {
                            xs: '26px'
                        },
                        letterSpacing: '1px'
                    }}
                >
                    MY CART
                </Typography>
                <CartProducts />
                {totalQty > 0 && <ClearCartButton onClick={() => dispatch(clearCart())}/>}
            </Stack>
            {totalQty > 0 && <OrederSummery total={{totalPrice, totalQty}}/>}
        </Stack>
    </Stack>
  )
}

export default Cart