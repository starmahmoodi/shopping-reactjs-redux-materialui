import { Box, Typography } from '@mui/material'
import React from 'react'

const ClearCartButton = ({ onClick }) => {
  return (
    <Box
        onClick={onClick}
        bgcolor='cartRedButton.main'
        sx={{
            cursor: 'pointer',
            width: 'fit-content',
            borderRadius: '4px',
            padding: {
                xs: '3px 14px'
            },
            transition: 'all 300ms linear',
            ':hover': {
                bgcolor: '#f53a30',
            }
        }}
    >
        <Typography
            sx={{
                color: '#fff',
                fontSize: {
                    xs: '16px'
                },
                fontFamily: " 'Poppins', sans-serif",
            }}
        >
            Clear Cart
        </Typography>
    </Box>
  )
}

export default ClearCartButton