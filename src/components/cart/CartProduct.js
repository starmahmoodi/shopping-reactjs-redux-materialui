import { Box, Stack } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import OrderProduct from './OrderProduct';

const CartProduct = ({ item, deleteCartItem, increaseCartItem, decreaseCartItem }) => {

  return (
    <Stack
        className='cart-product'
        height='fit-content'
        sx={{
            bgcolor: 'transparent',
            flexDirection: {
                xs: 'column',
                sm: 'row'
            },
            justifyContent: {
                sm: 'space-between',

            },
            alignItems: {
                sm: 'flex-start'
            },
            margin: {
                xs: '10px 0'
            },
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            padding: {
                sm: '0 0 30px 0'
            },
        }}
    >
        <Box
            sx={{
                bgcolor: '#fff',
                margin: {
                    xs: 'auto',
                    sm: '0'
                },
                height: {
                    xs: '90vw',
                    sm: '190px',
                    // md: '25vw',
                    // lg: '20vw',
                    // xl: '15vw'
                },
                width: {
                    xs: '90vw',
                    sm: '220px',
                    // md: '30vw',
                    // lg: '20vw',
                    // xl: '15vw'
                },
            }}
        >
            <img src={item.thumbnail} className='cart-img' alt='product' width='100%' />
            <Stack
                justifyContent='center'
                direction='row'
                alignItems='center'
                sx={{
                    width: '100%',
                    height: {
                        xs: '11%',
                        sm: '20%'
                    }
                }}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        border: {
                            xs: '1px solid rgba(0, 0, 0, 0.2)'
                        },
                        borderRadius: '2px',
                        width: {
                            xs: '28px',
                            sm: '26px'
                        },
                        height: {
                            xs: '28px',
                            sm: '26px'
                        },
                        cursor: 'pointer',
                    }}
                >
                    <DeleteIcon
                        onClick={deleteCartItem}
                        sx={{
                            fontSize: {
                                xs: '20px',
                                sm: '18px'
                            },
                        }}
                    />
                </Box>
            </Stack>
        </Box>
        <OrderProduct 
            increaseCartItem={increaseCartItem} 
            decreaseCartItem={decreaseCartItem}
            item={item}
        />

    </Stack>
  )
}

export default CartProduct