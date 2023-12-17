import { createTheme } from "@mui/material";


const theme = createTheme({
    breakpoints: {
    values: {
      xs: 0,
      sm: 570,
      md: 800,
      lg: 1080,
      xl: 1200,
    },
    },
    palette: {
        homePageGhostWhite : {
            main: '#f8f8fa',
        },
        headerYellow: {
            main: '#eeb808',
        },
        headerGray: {
            main: '#63766b'
        },
        headerBlue: {
            main: '#103755'
        },
        productYellow : {
            main: '#eeb808',
        },
        productGray : {
            main: '#63766b'
        },
        productBlue: {
            main:  '#103755'
        },
        modalTransparent: {
            main: 'rgba(0,0,0,0.7)'
        },
        cartLightWhite: {
            main: '#f8f8fa'
        },
        cartRedButton: {
            main: '#CE4F4B'
        },
        cartLightBlue: {
            main: '#707b8e'
        },
        cartYellow: {
            main: '#eeb808',
        },
    },
    components: {
        MuiPaginationItem:{
            styleOverrides: {
                root: {
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '600',
                    fontSize: '1rem',
                    color: '#103755'
                }
            }
        },
      },
    
})

export default theme;