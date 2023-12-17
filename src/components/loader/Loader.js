import React from 'react'
import spinner from '../../assets/images/spinner.svg'
import { Stack } from '@mui/material'

const Loader = () => {
  return (
    <Stack
        justifyContent='center'
        alignItems='center'
    >
        <img src={spinner} alt='loader' width='60px'/>
    </Stack>
  )
}

export default Loader