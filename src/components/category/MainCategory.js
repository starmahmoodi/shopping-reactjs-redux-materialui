import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import SingleCategory from './SingleCategory'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../../store/catSlice'

const MainCategory = () => {
    const allCategories = useSelector(selectAllCategories)

    const categoryContent = (
        <Grid 
            container 
            columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}}
            spacing={{
                sm: 3,

            }}
            sx={{
                textAlign: 'center',
                width: '100%',
                margin: '0 auto',
                maxWidth: '1300px'
            }}
        >
            <Grid
                xs={1}
                sm={2}
                md={3}
                lg={4}
                xl={5}
                sx={{
                    textAlign: 'left',
                    mb: {
                      xs: '20px',
                      sm: '0'
                    }
                }}
            >
                <Typography
                    variant='h3'
                    color='headerBlue.main'
                    sx={{
                        fontSize: {
                            xs: '26px'
                        },
                        fontWeight: {
                            xs: '700'
                        },
                        letterSpacing: {
                            xs: '1px'
                        },
                        fontFamily: "'Poppins', sans-serif",
                    }}
                >
                    CATEGORY
                </Typography>
            </Grid>
            {allCategories.map(item => <SingleCategory item={item} key={item.id} />)}
        </Grid>
    )

  return (
    <Box
        sx={{
            padding: {
                xs: '70px 0 40px 0'
            },
            width: {
                xs: '92%',
                sm: '97%',
            },
            margin: {
                xs: '0 auto'
            }
        }}
    >
        {categoryContent}
    </Box>
  )
}

export default MainCategory