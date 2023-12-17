import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const OrederSummery = ({ total }) => {
  return (
    <Stack
      className='cart-oreder-summery'
      sx={{
        padding: {
          xs: '20px 10px 10px'
        },
        bgcolor: '#fff',
        margin: {
          xs: '70px 0 10px 0'
        },
        width: {
          lg: '35vw',
          xl: '27vw'
        },
        height: {
          lg: 'fit-content'
        },

      }}
    >
      <Typography
        color='cartLightBlue.main'
        sx={{
          margin: {
            xs: '0 0 10px 0'
          },
          fontFamily: '"Poppins", sans-serif',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        Order Summery
      </Typography>
      <Stack
        sx={{
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          padding: {
            xs: '20px 0 100px 0'
          }
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            margin: {
              xs: '0 0 10px 0'
            }
          }}
        >
          <Typography
            color='cartLightBlue.main'
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            Selected {total.totalQty} items(s) Price
          </Typography>
          <Typography
            color='cartLightBlue.main'
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            ${total.totalPrice}
          </Typography>
        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            margin: {
              xs: '0 0 10px 0'
            }
          }}
        >
          <Typography
            color='cartLightBlue.main'
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            Discount
          </Typography>
          <Typography
            color='cartLightBlue.main'
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            $0.00
          </Typography>
        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            margin: {
              xs: '0 0 10px 0'
            }
          }}
        >
          <Typography
            color='cartLightBlue.main'
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            Delivery Cost
          </Typography>
          <Typography
            color='cartLightBlue.main'
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            $10.00
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          borderTop: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            padding: {
              xs: '10px 0 0 0'
            }
          }}
        >
          <Typography
            color='cartLightBlue.main'
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            Grand Total:
          </Typography>
          <Typography>
            ${total.totalPrice ? total.totalPrice + 10 : 0}
          </Typography>
        </Stack>
        <Box
          justifyContent='center'
          alignItems='center'
          display='flex'
          sx={{
            cursor: 'pointer',
            bgcolor: 'cartYellow.main',
            width: {
              xs: '100%'
            },
            transition: 'all 300ms linear',
            borderRadius: '6px',
            padding: {
              xs: '8px 14px'
            },
            color: '#ffffff',
            fontFamily: '"Poppins", sans-serif',
            fontSize: '18px',
            fontWeight: '500',
            ':hover': {
              bgcolor: '#d0a107'
            },
            margin: {
              xs: '20px 0 5px 0'
            }
          }}
        >
          Proceed to Checkout
        </Box>
      </Stack>
    </Stack>
  )
}

export default OrederSummery