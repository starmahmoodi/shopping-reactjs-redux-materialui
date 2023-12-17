import { Badge, Stack, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainHeader = () => {

  const totalQty = useSelector(state => state.cart.totalQty)

  return (
    <Stack 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center'
      margin='0 auto'
      sx={{
        padding: {
          xs: '10px 20px',
          sm: '12px 20px',
          md: '15px 20px'
        },
        width: '100%',
        maxWidth: '1300px',
      }}
    >
      <Stack 
        className='header-brand'
      >
        <Link className='brand' to='/'>
          Shopping<span className='yellow-text'>Hub.</span>
        </Link>
      </Stack>
      <Stack 
        direction='row'
        alignItems='center'
        sx={{
          margin: {
            xs: '5px 30px'
          }
        }}
      >
        <ShoppingCartIcon 
          color='headerGray' 
          fontSize='small'

        />
        <Badge badgeContent={`${totalQty}`} color="headerYellow">
          <Link to='cart'>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: {
                  xs: '500'
                },
                fontSize: {
                  xs: '16px'
                },
                color: 'headerGray.main',
                margin: {
                  xs: '5px'
                }
              }}
            >
              Cart
            </Typography>
          </Link>
        </Badge>
      </Stack>
    </Stack>
  )
}

export default MainHeader