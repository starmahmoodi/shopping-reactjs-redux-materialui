import {List, ListItem, Paper } from '@mui/material'
import React from 'react'
import CloseButton from '../modal/CloseButton'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCategories } from '../../store/catSlice'
import { Link } from 'react-router-dom'
import { categoryMenuHandler } from '../../store/catSlice'

const Menu = () => {

    const allCategory = useSelector(selectAllCategories)
    const categoryMenuIsShown = useSelector(state => state.category.categoryMenuIsShown)
    const dispatch = useDispatch()

    const categoryMenuShownHandler = () =>{
        dispatch(categoryMenuHandler())
        console.log('d');
    }

    const content = allCategory.map(item => (
        <ListItem
            alignItems='center'
            key={item.id}
            sx={{
                padding: {
                    xs: '0'
                },
                margin: {
                    xs: '20px 0 0 0'
                },
                width: 'fit-content',
            }}
        >
            
            <Link
                onClick={categoryMenuShownHandler}
                to={`category/${item.id}`}
                className='nav-category-link'
            >
                {item.name}
            </Link>
        </ListItem>
    ))

  return (
    <Paper
        className={`${!categoryMenuIsShown && 'category-nav-disable'}`}
        elevation={12}
        square
        sx={{
            height: '100vh',
            width: '280px',
            position: 'fixed',
            top: '0',
            right: '0',
            zIndex: '200',
            bgcolor: '#fff',
            transition: 'all 300ms linear'
        }}
    >
        <CloseButton 
            topProp='35px'
            rightProp='35px'
            onClick={categoryMenuShownHandler}
        />
        <List
            sx={{
                padding: {
                    xs: '40px 30px'
                }
            }}
        >
            {content}
        </List>
    </Paper>
  )
}

export default Menu