import { Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/productSlice'
import Loader from '../loader/Loader'
import {fetchProducts} from '../../store/productSlice'
import Product from './Product'
import Modal from '../modal/Modal'
import Grid from '@mui/material/Unstable_Grid2';

let firstRender = false;

const Products = ({ categoryName }) => {
    const [pageNum, setPageNum] = useState(1)
    const changeHandler = (e, value) =>{
        setPageNum(value)
        firstRender = false;
    }

    const dispatch = useDispatch()
    const allProducts = useSelector(selectAllProducts) || []
    const status = useSelector(state => state.product.status)
    const modalShownStatus = useSelector(state => state.modal.status)

    let filteredProducts;
    let lengthOfProducts;
    
    

    useEffect(() =>{

        if (firstRender === false && status === 'idle') {
            dispatch(fetchProducts())
            firstRender = true;
        }

    }, [pageNum,status, dispatch])


    let content ;

    if (status === 'loading') {
        content = (
            <Loader />
        )
    }

    if (status === 'idle' && allProducts.products) {
        

        if (categoryName) {
            filteredProducts = allProducts.products.filter(item => item.category === categoryName)

        }else{
            filteredProducts = allProducts.products;
        }

        lengthOfProducts = filteredProducts.length;

        const firstProduct = (pageNum - 1) * 10;
        const lastProduct = pageNum * 10
        const paginateProducts = filteredProducts.slice(firstProduct, lastProduct)
        content = (
            paginateProducts.map(item => (
                <Product key={item.id} item={item} />
            ))
        )

    }
    
    
    if (status === 'error') {
        content = (
            <Typography>
                Error
            </Typography>
        )
    }

    console.log('render');
  return (
    <Grid
        container
        columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}}
        spacing={{
            sm: 3
        }}
        rowSpacing={{
            xs: 4,
            sm: 1
        }}
        sx={{
            alignItems: {
                xs: 'center'
            },
            width: {
                xs: '92%',
                sm:'97%',
            },
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
        >
            <Typography
                color='productBlue.main'
                sx={{
                    fontSize: '26px',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                OUR PRODUCTS
            </Typography>
        </Grid>
        {modalShownStatus && <Modal />}
        {content}
        <Grid
            xs={1}
            sm={2}
            md={3}
            lg={4}
            xl={5}
            sx={{
                m: {
                    xs: '20px'
                },
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {
                lengthOfProducts > 10   
            && 
                <Pagination
                    shape='rounded'
                    variant='outlined'
                    size='medium' 
                    count={lengthOfProducts / 10} 
                    page={pageNum} 
                    onChange={changeHandler}
                 />
            }
        </Grid>
    </Grid>
  )
}

export default Products