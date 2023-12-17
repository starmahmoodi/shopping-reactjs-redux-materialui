import { Stack } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { categoryMenuHandler } from '../../store/catSlice'
import List from '@mui/material/List/List';
import { Link } from 'react-router-dom';

const HeaderCartegory = () => {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.data)
    const categoryNavigationContent = categories.map(item => (
        <Link
            to={`category/${item.id}`}
            key={item.id}
            className='category-simple-nav'
        >
            {item.name}
        </Link>
    ))
    console.log(categories);
    
  return (
    <Stack
        direction='row'
        sx={{
            bgcolor: 'headerBlue.main',
            padding: {
                xs: '5px 20px'
            },
            cursor: 'pointer',
            justifyContent: {
                xs: 'flex-end'
            },

        }}
    >
        <MenuIcon 
            color='headerYellow'
            sx={{
                fontSize: {
                    xs: '26px'
                },
                
                "&:hover": {
                    color: '#fff'
                },
                display: {
                    md: 'none'
                }
            }}
            onClick={() => dispatch(categoryMenuHandler())}
        />
        <List
            sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                },
                mr: '15px'
                
            }}
        >
            {categoryNavigationContent}
        </List>
    </Stack>    
  )
}

export default HeaderCartegory