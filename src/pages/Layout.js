import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Stack } from '@mui/material'

const Layout = () => {
  return (
    <Stack
      direction='column'
    >
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  )
}

export default Layout