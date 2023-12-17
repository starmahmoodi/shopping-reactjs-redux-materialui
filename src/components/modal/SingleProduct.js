import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice'




const SingleProduct = () => {

    const dispatch = useDispatch()

    const modalData = useSelector(state => state.modal.data.item)
    const [orderQty, setOrderQty] = useState(1)

    const increaseOrderQtyHandler = () =>{
        setOrderQty(prevState => prevState += 1)
    }
    const decreaseOrderQtyHandler = () =>{
        setOrderQty(prevState => prevState -= 1)
    }

    const addCartHandler = () =>{
        dispatch(addToCart(
            modalData,
            orderQty
        ))
    }
    
  return (
    <Stack
        sx={{
            overflowY: {
                xs: 'scroll'
            },
            bgcolor: '#fff',
            flexDirection: {
                xs: 'column',
                md: 'row'
            },
            // alignItems: {
            //     md: 'center'
            // },
            height: {
                xs: '88%'
            },
            width: {
                xs: '90%',
                md: '95%'
            },
            margin: {
                xs: 'auto'
            },
            gap: {
                md: '5%'
            }
        }}
    >
        <Box
            className='modal-image'
            sx={{
                width: {
                    xs: '100%',
                    md: '55%'
                },
                height: 'fit-content'
            }}
        >
            <img
                className='modal-img'
                src={modalData.thumbnail} 
                alt='ms'
            />
        </Box>
        <Stack
            direction='column'
            alignItems='flex-start'
            justifyContent='flex-start'
            sx={{
                width: {
                    xs: '100%',
                    md: '45%'
                },
            }}
        >
            <Stack
                className='modal-product-details'
                direction='column'
                alignItems='flex-start'
                justifyContent='flex-start'
                sx={{
                    borderBottom: '1px dashed #707b8e'
                }}
            >
                <Typography
                    variant='h3'
                    color='productBlue.main'
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: {
                            xs: '22px'
                        },
                        fontWeight:{
                            xs: '500'
                        },
                        margin: {
                            xs: '30px 0 10px 0',
                            md: '0 0 10px 0'
                        }
                    }}
                >
                    {modalData.title}
                </Typography>
                <Typography
                    color='productGray.main'
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: {
                            xs: '15px'
                        },
                        fontWeight:{
                            xs: '400'
                        },
                    }}
                >
                    {modalData.description}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: {
                            xs: '24px'
                        },
                        fontWeight:{
                            xs: '600'
                        },
                        color: '#000000',
                        margin: {
                            xs: '15px 0 0 0'
                        },
                        padding: {
                            xs: '0 0 5px 0'
                        },
                    }}
                >
                    Price: ${modalData.price}
                </Typography>
            </Stack>
            <Stack
                className='cart-action-product'
                sx={{
                    flexDirection: {
                        xs: 'column'
                    },
                    textAlign: {
                        xs: 'left'
                    },
                    alignItems: {
                        xs: 'flex-start'
                    },
                    padding: {
                        xs: '20px 0 0 0'
                    }
                }}
            >
                <Stack
                    className='cart-counter-product'
                    sx={{
                        flexDirection: {
                            xs: 'row'
                        },
                        justifyContent: {
                            xs: 'center'
                        },
                        alignItems: {
                            xs: 'center'
                        },
                    }}
                >
                    <Typography
                        color='productGray.main'
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: {
                                xs: '16px'
                            },
                            fontWeight:{
                                xs: '400'
                            },
                        }}
                    >
                        Qty:
                    </Typography>
                    <Stack
                        className='decrease-cart-button'
                        onClick={decreaseOrderQtyHandler}
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                            border: "2px solid #f8f8fa",
                            borderRadius: '3px',
                            padding: {
                                xs: '4px'
                            },
                            cursor: 'pointer',
                            margin: {
                                xs: '0 17px 0 10px'
                            }
                        }}
                    >
                        <RemoveIcon 
                            fontSize='small' 
                            color="productGray"
                        />
                    </Stack>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: {
                                xs: '16px'
                            },
                            fontWeight:{
                                xs: '400'
                            },
                        }}
                    >
                        {orderQty}
                    </Typography>
                    <Stack
                        className='increase-cart-button'
                        onClick={increaseOrderQtyHandler}
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                            border: "2px solid #f8f8fa",
                            borderRadius: '3px',
                            padding: {
                                xs: '4px'
                            },
                            cursor: 'pointer',
                            margin: {
                                xs: '0 0 0 17px'
                            }
                        }}
                    >
                        <AddIcon
                            fontSize='small' 
                            color="productGray"
                        />
                    </Stack>
                </Stack>
                <Stack
                    className='modal-cart-button'
                    onClick={addCartHandler}
                    direction='row'
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                        cursor: 'pointer',
                        bgcolor: '#103755',
                        color: '#ffffff',
                        margin: {
                            xs: '30px 0 0 0'
                        },
                        padding: {
                            xs: '8px 15px'
                        },
                        gap: {
                            xs: '5px'
                        },
                        borderRadius: {
                            xs: '5px'
                        }
                    }}
                >
                    <span>
                        <ShoppingCartIcon
                            fontSize='medium'
                        />
                    </span>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: {
                                xs: '18px'
                            },
                        }}
                    >
                        Add To Cart
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default SingleProduct