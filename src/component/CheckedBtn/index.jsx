import Box from '@mui/material/Box'
import React from 'react'
import { appColors } from '../../constants/color'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
const CheckBtn = ({ label, sx={} }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction='row'
        spacing={2}
        sx={{py: 1}}

      >
         <CheckIcon
          sx={{
            fontSize: "28px",
            py: "5px",
            px: "5px",
            color: '#fff',
            borderRadius: "50px",
              backgroundColor: appColors[theme.palette.mode]['fg']
            }}
          />
        <Box>
          <Typography variant='body2' sx={{  ...sx, fontWeight: "600"}} color='initial'>
            {label}
          </Typography>
        </Box>
      </Stack>
    </>
  )
}

export default CheckBtn
