import { Stack, Typography } from '@mui/material'
import React from 'react'
import OrderButton from './OrderButton'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const OrderProduct = ({ item, increaseCartItem, decreaseCartItem }) => {
  return (
    <Stack
        className='cart-product-details'
        direction='row'
        justifyContent='space-between'
        width='100%'
        sx={{
            padding: {
                xs: '20px 0 30px 0',
                sm: '0 15px 30px 15px'
            },
            // height: {
            //     sm: '100%'
            // },
            alignSelf: {
                sm: 'flex-start'
            }
        }}
    >

        <Stack
            direction='column'
            justifySelf='flex-end'
            sx={{
                
            }}
        >
            <Typography
                color='cartLightBlue.main'
                sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                }}
            >
                {item.title}
            </Typography>
            
            <Stack
                sx={{
                    flexDirection: {
                        xs: 'row'
                    },
                    justifyContent: {
                        xs: 'flex-start'
                    },
                    alignItems: {
                        xs: 'center'
                    },
                    margin: {
                        xs: '10px 0'
                    }
                }}
            >
                <Typography
                    color='cartLightBlue.main'
                    sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        margin: {
                            xs: '0 10px 10px 0'
                        }
                    }}
                >
                    Qty:
                </Typography>
                <OrderButton
                    onClick={decreaseCartItem}
                >
                    <RemoveIcon 
                        sx={{
                            color: '#707b8e',
                            fontSize: '20px',
                        }}
                    />
                </OrderButton>
                <Typography
                    color='cartLightBlue.main'
                    sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        margin: {
                            xs: '0 15px 0 0'
                        }
                    }}
                >
                    {item.qty}
                </Typography>
                <OrderButton
                    onClick={increaseCartItem}
                >
                    <AddIcon 
                        sx={{
                            color: '#707b8e',
                            fontSize: '20px',
                        }}
                    />
                </OrderButton>
            </Stack>
            
            <Typography
                color='cartLightBlue.main'
                sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '15px',
                    fontWeight: '400',
                    margin: {
                        xs: '0 10px 10px 0',
                        sm: '0'
                    }
                }}
            >
                Price : ${item.price}
            </Typography>
        </Stack>
        <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            alignSelf='flex-end'
        >
            <Typography
                color='productBlue.main'
                sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                }}
            >
                Sub Total: ${item.price * item.qty}
            </Typography>
        </Stack>
    </Stack>
  )
}

export default OrderProduct