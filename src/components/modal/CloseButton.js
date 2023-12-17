import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/material';

const CloseButton = ({onClick, topProp , leftProp, rightProp}) => {
    const top = topProp ?  topProp : null;
    const right = rightProp ?  rightProp : null;
    const left = leftProp ?  leftProp : null;
  return (
    <Box onClick={onClick}
        sx={
            {
            cursor: 'pointer',
            width: {
                xs: '20px'
            },
            height: {
                xs: '20px'
            },
            borderRadius: '50%',
            bgcolor: '#fff',
            position: 'absolute',
            top: top,
            left: left,
            right: right,
            transform: "translate(50%, -50%)",
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '200',
        }}
    >
        <CancelIcon
            sx={{
                fontSize: '28px',
                color: 'black',
            }}
        />
    </Box>
  )
}

export default CloseButton