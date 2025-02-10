import React from 'react'
import { useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import CheckIcon from '@mui/icons-material/Check'
import { appColors } from '../../constants/color'

const plans = [
  {
    title: '1 Week Plan',
    desc: 'Charge per day',
    priceBase: '4.30',
    priceExponent: '$',
    features: ['Number of Countries: 26', 'Valid for 7 days', '24/7 support'],
    finalP: '$30 | Buy Now'
  },
  {
    title: '2 Weeks Plan',
    desc: 'Charge per day',
    priceBase: '2.85',
    priceExponent: '$',
    features: ['14 days access', 'Unlimited data', 'Priority support'],
    finalP: '$30 | Buy Now'
  },
  {
    title: '3 Weeks Plan',
    desc: 'Charge per day',
    priceBase: '2.20',
    priceExponent: '$',
    features: ['21 days access', 'Unlimited data', 'Premium support'],
    finalP: '$30 | Buy Now'
  }
]

const PlanCard = ({
  title,
  desc,
  priceBase,
  priceExponent,
  features,
  finalP
}) => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        textAlign: 'center',
        width: '350px',
        height: '560px',
        boxShadow: 3,
        pb: {xs: 3, sm: 3, md: 8, lg: 4, xl: 4},
        pt: {xs: 3, sm: 3, md: 3, lg: 4, xl: 4},
        borderRadius: 2,
        backgroundColor: '#fff',
        '&:hover': {
          color: '#fff',
          backgroundColor: appColors[theme.palette.mode]['fg']
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardContent>
        <Typography variant='h6' fontWeight='bold'>
          {title}
        </Typography>
        {desc && (
          <Typography variant='body2' color='gray'>
            {desc}
          </Typography>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2
          }}
        >
          <sup style={{ fontSize: '15px' }}>{priceExponent}</sup>
          <Typography
            variant='h3'
            sx={{
              fontSize: { md: '3rem', xs: '3rem' },
              '&:hover': { color: '#fff' },
              mt: 8,
              fontWeight: '600'
            }}
          >
            {priceBase}
          </Typography>
        </Box>
        <Stack
          spacing={1}
          sx={{
            mt: 6,
            backgroundColor: 'whitesmoke',
            borderRadius: 2,
            py: '1.2rem',
            px: {xs:"2rem", md:"0"},
            minHeight: '100px'
          }}
        >
          {features.map((feature, i) => (
            <Stack
              key={i}
              direction='row'
              sx={{ py: '10px', px: { xs: '0', md: '3.8rem' }, mx: 'auto' }}
              alignItems='center'
              spacing={1}
            >
              <CheckIcon
                sx={{
                  fontSize: 20,
                  color: '#fff',
                  borderRadius: '50%',
                  backgroundColor: appColors[theme.palette.mode]['fg'],
                  p: 0.5
                }}
              />
              <Typography variant='body2' sx={{ color: '#000','&:hover':{color: '#000'}, fontWeight: 500 }}>
                {feature}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Button
          size='text'
          sx={{
            borderRadius: '15px',
            boxShadow: 5,
            fontWeight: '600',
            py: '1rem',
            px: '5rem',
            color: appColors[theme.palette.mode]['fg'],
            backgroundColor: '#fff',
            '&:hover': {
              color: '#fff',
              backgroundColor: appColors[theme.palette.mode]['fg']
            },
            mt: 2
          }}
        >
          {finalP}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function PurchaseCards () {
  return (
    <Box sx={{ backgroundColor: '#080c34' }}>
      <Container maxWidth='lg'>
        <Box sx={{ mt: 5 }}>
          <Typography
            variant='h4'
            align='center'
            sx={{ py: '3rem', color: '#fff', mb: 3, fontWeight: 'bold' }}
          >
            Choose Your Plan <br />
            <span style={{ fontSize: '34px' }}>That's Right for You</span>
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent='start'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: '2px solid #fff',
              pb: 7,
              px: {xs: 4, sm: 4, md: 5, lg: 6, xl: 8}
            }}
          >
            {plans.map((plan, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <PlanCard {...plan} />
              </Grid>
            ))}
          </Grid>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{
              py: '4rem',
              px: { xs: '2rem', md: '2.3rem' },
              textAlign: { xs: 'center', md: 'left' },
              alignItems: 'center'
            }}
          >
            <Box>
              <Typography
                variant='h4'
                sx={{ fontWeight: '500', color: '#fff' }}
              >
                Custom Plan
              </Typography>
              <Typography variant='caption' color='gray'>
                Staying for more than 3 weeks? Get a custom plan for your stay.
              </Typography>
            </Box>
            <Button
              size='text'
              sx={{
                py: '1rem',
                px: '1.8rem',
                borderRadius: '50px',
                color: '#fff',
                backgroundColor: appColors['light']['fg']
              }}
            >
              Contact Sales
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
