import { Box } from '@mui/material'
import React from 'react'

const OrderButton = (prop) => {
  return (
    <Box
        onClick={prop.onClick}
        alignItems='center'
        justifyContent='center'
        display='flex'
        sx={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            width: {
                xs: '32px'
            },
            height: {
                xs: '32px'
            },
            ':hover': {
                border: '1px solid rgba(0, 0, 0, 0.3)',
            },
            transition: 'all 300ms linear',
            cursor: 'pointer',
            margin: {
                xs: '0 15px 0 0'
            }
        }}
    >
        {prop.children}
    </Box>
  )
}

export default OrderButton