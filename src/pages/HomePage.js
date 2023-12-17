import { Stack } from '@mui/material'
import React from 'react'
import HeaderBanner from '../components/header/HeaderBanner'
import MainCategory from '../components/category/MainCategory'
import Products from '../components/product/Products'

const HomePage = () => {
  return (
    <Stack
      bgcolor='homePageGhostWhite.main'
    >
      <HeaderBanner />
      <MainCategory />
      <Products />
    </Stack>
  )
}

export default HomePage