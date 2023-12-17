import { Box } from '@mui/material'
import React from 'react'
import banner from '../../assets/images/slider-img-2.png'

const HeaderBanner = () => {
  return (
    <Box
        sx={{
            height: {
                xs: '280px'
            },
            width:{
              md: '100%'
            },
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover'
        }}
    >
    </Box>
  )
}

export default HeaderBanner