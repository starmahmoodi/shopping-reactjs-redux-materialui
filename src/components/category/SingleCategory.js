import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'

const SingleCategory = ({item}) => {

  return (
    <Grid
      xs={1}
      sm={1}
      md={1}
      lg={1}
      xl={1}
      sx={{
        width: '100%',
        height: {
          xs: '100vw',
          sm: '50vw',
          md: '33.3vw',
          lg: '25vw',
          xl: '20vw'
        },
        mb: {
          xs: '20px'
        }
      }}
    >
      <Stack
        sx={{
          borderRadius: {
            xs: '10px'
          },
          overflow: 'hidden',
          height: '90%',
          width :{
            xs: '100%'
          },
          margin: {
            xs: '0 auto'
          },
        }}
      >
          <img 
            src={item.image} 
            alt={item.name} 
            width='100%'
            height='100%'
          />
      </Stack>
      <Typography
        margin='10px 0 0'
        variant='h6'
        sx={{
          fontSize: {
            xs: '20px'
          },
          fontFamily: "'Poppins', sans-serif",
          fontWeight: {
            xs: '700'
          }
        }}
      >
        {item.name}
      </Typography>
    </Grid>
  )
}

export default SingleCategory