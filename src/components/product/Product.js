import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { modalIsOn } from '../../store/modalSlice'
import Grid from '@mui/material/Unstable_Grid2';
import { spaceFinder } from '../../utils/utils';

const Product = ({item}) => {

    const dispatch = useDispatch()

    const productClickHandler = () =>{
        dispatch(modalIsOn(item))
    }
    const newTitle = spaceFinder(item.title)

  return (
    <Grid
        xs={1}
        sm={1}
        sx={{
            height: {
                xs: '100vw',
                sm: '55vw',
                md: '33.3vw',
                lg: '25vw',
                xl: '20vw'
            },
            width: '100%',
        }}
    >
        <Paper
            variant='elevation'
            elevation={3}
            square={false}
            sx={{
                width: {
                    xs: '100%',
                },
                height: '95%',
                margin: '0 auto'
            }}
        >
            <Stack
                onClick={productClickHandler}
                sx={{
                    cursor: 'pointer',
                    flexDirection: {
                        xs: 'column'
                    },
                    justifyContent: {
                        xs: 'flex-start'
                    },
                    height: '100%',
                    width: '100%',
                    textAlign: {
                        xs: 'left'
                    },
                    overflow: 'hidden',
                    bgcolor: 'fff',
                    padding: {
                        xs: '15px 0',
                        sm: '10px 0',
                    },
                    position: 'relative'
                }}
            >
                <Stack
                    sx={{
                        width: '100%',
                        height: {
                            xs: '75%',
                            sm: '75%'
                        },
                        position: {
                            xs: 'relative'
                        }
                    }}
                >
                    <Box
                    sx={{
                        height: {
                            xs: '100%'
                        },
                        width: '100%',
                        
                    }}>
                        <img src={item.thumbnail} width="100%" height='100%'  alt={item.title}/>
                    </Box>
                    <Paper
                        elevation={12}
                        sx={{
                            position:{
                                xs: 'absolute'
                            },
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            top: {
                                xs: '20px'
                            },
                            right: {
                                xs: '30px'
                            },
                            padding: {
                                xs: '0 8px'
                            },
                            borderRadius: {
                                xs: '8px'
                            },
                            bgcolor: 'productYellow.main',
                        }}
                    >
                        <Typography
                            color='white'
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: {
                                    xs: '13px'
                                },
                                fontWeight: {
                                    xs: '600'
                                },
                            }}
                        >
                            {item.category.toUpperCase()}
                        </Typography>
                    </Paper>
                </Stack>
                <Typography
                    color='productGray.main'
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: {
                            xs: '15px',
                        },
                        fontWeight: {
                            xs: '400'
                        },
                        margin: {
                            xs: '15px 0 0 20px',
                            sm: '10px 0 0 15px'
                        },
                        lineHeight: {
                            sm: '14px'
                        }
                    }}
                >
                    {newTitle}
                </Typography>
                <Typography
                    color='productBlue.main'
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: {
                            xs: '18px',
                            sm: '16px',
                            xl: '18px'
                        },
                        fontWeight: {
                            xs: '600',
                            xl: '700'
                        },
                        position: 'absolute',
                        left: {
                            xs: '20px',
                            sm: '15px'
                        },
                        bottom: {
                            xs: '30px',
                            sm: '20px',
                            md: '15px'
                        }
                    }}
                >
                    ${item.price}
                </Typography>
            </Stack>
        </Paper>
    </Grid>
  )
}

export default Product