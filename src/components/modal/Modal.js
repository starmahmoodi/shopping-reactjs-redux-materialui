import { Stack } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { modalIsOff } from '../../store/modalSlice'

import CloseButton from './CloseButton';
import BackDrop from './BackDrop';
import SingleProduct from './SingleProduct';


const Modal = () => {
    const dispatch = useDispatch()

    const closeModalHandler = () => {

        dispatch(modalIsOff())
    }

  return (
    <>
        <Stack
            sx={{
                bgcolor: '#fff',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: {
                    xs: '80vw',
                    md: '90vw'
                },
                height: {
                    xs: '80vh',
                    md: 'fit-content',
                    xl: 'fit-content'
                }, 
                borderRadius: '4px',
                zIndex: '100',
                padding: {
                    md: '30px 0'
                }
            }}
        >
            <CloseButton onClick={closeModalHandler} topProp='0' rightProp='0'/>
            <SingleProduct />
        </Stack>
        <BackDrop onClick={closeModalHandler} />
    </>
  )
}

export default Modal