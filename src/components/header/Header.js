import { Stack } from '@mui/material'
import React from 'react'
import MainHeader from './MainHeader'
import HeaderCartegory from './HeaderCartegory'
import Menu from './Menu'

const Header = () => {

  return (
    <Stack 
      direction='column'
    >
      <MainHeader />
      <HeaderCartegory />
      <Menu />
    </Stack>
  )
}

export default Header