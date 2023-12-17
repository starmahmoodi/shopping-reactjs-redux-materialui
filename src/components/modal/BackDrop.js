import { Box } from '@mui/material'
import React from 'react'

const BackDrop = ({onClick}) => {
  return (
    <Box onClick={onClick}
        width='100vw'
        height='100vh'
        bgcolor='modalTransparent.main'
        sx={{
        position: {
            xs: 'fixed'
        },
        top: {
            xs: '0'
        },
        left: {
            xs: '0'
        },
        zIndex: '20'
       }}
    >
    </Box>
  )
}

export default BackDrop