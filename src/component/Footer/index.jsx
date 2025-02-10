import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { appColors } from '../../constants/color'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Footer () {
  return (
    <Box sx={{ backgroundColor: '#041054', color: '#fff', py: 6 }}>
      <Container
        maxWidth='lg'
        sx={{ px: { xs: 3, sm: 4, md: 10, lg: 5, xl: 4 } }}
      >
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant='h4' fontWeight='500'>
              Rent Sim Connect!
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Box sx={{ width: '100%', maxWidth: 350 }}>
                <TextField
                  placeholder='Enter your email here'
                  variant='outlined'
                  fullWidth
                  sx={{
                    borderRadius: '50px',
                    border: '1px solid #fff',
                    backgroundColor: 'transparent',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '50px',
                      paddingRight: '8px',
                      color: '#fff',
                      '& fieldset': { borderColor: '#fff' },
                      '&:hover fieldset': { borderColor: appColors.primary }
                    },
                    input: { color: '#fff' }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          sx={{
                            backgroundColor: '#001690',
                            color: '#fff',
                            borderRadius: '50%',
                            width: 40,
                            height: 40
                          }}
                        >
                          <ArrowForwardIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant='h6' fontWeight='400'>
                  Support
                </Typography>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Link
                    href='#'
                    sx={{ fontSize: { xs: '13px', md: '15px' } }}
                    color='#A6A6A6'
                    underline='hover'
                  >
                    Help Center
                  </Link>
                  <Link
                    href='#'
                    sx={{ fontSize: { xs: '13px', md: '15px' } }}
                    color='#A6A6A6'
                    underline='hover'
                  >
                    FAQs
                  </Link>
                  <Link
                    href='#'
                    sx={{ fontSize: { xs: '13px', md: '15px' } }}
                    color='#A6A6A6'
                    underline='hover'
                  >
                    Customer Support
                  </Link>
                </Stack>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant='h6' fontWeight='400'>
                  Contact Us
                </Typography>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Typography
                    color='#A6A6A6'
                    sx={{ fontSize: { xs: '13px', md: '15px' } }}
                  >
                    Email: info@rentsimconnect.com
                  </Typography>
                  <Typography
                    color='#A6A6A6'
                    sx={{ fontSize: { xs: '13px', md: '15px' } }}
                  >
                    Phone: +233 206983015
                  </Typography>
                  <Typography
                    color='#A6A6A6'
                    sx={{ fontSize: { xs: '13px', md: '15px' } }}
                  >
                    Address: NII SAI GBEHE LN GD-184-1768 AMERICAN HOUSE, EAST
                    LEGON
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <WhatsAppIcon sx={{ mb: {xs:2.5, md:0.5}}} />
                    <span> : +233 20698 3015</span>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}
        >
          <Typography variant='body2'>
            © 2025 Rent Sim Connect. All rights reserved.
          </Typography>
          <Stack direction='row' spacing={2} mt={1}>
            <Link href='#' color='#fff' underline='hover'>
              Terms & Conditions
            </Link>
            <Link href='#' color='#A6A6A6' underline='hover'>
              Privacy Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
