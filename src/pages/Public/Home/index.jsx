import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Grid2 from '@mui/material/Grid2'
import { useTheme } from '@mui/material/styles'
import { CheckedBtn, VideoComponent } from '../../../component'
import { appColors } from '../../../constants/color'
import NumberGrid from '../../../component/NumberGrid'
import { teal } from '@mui/material/colors'
import FAQSection from '../../../component/Faq'
import PurchaseCards from '../../../component/PurchaseCard'

export default function HomePage () {
  const theme = useTheme()
  const stats = [
    {
      number: 1,
      title: 'Choose Your Plan',
      description: 'Pick from our 7, 14, or 21-day packages.',
      color: appColors[theme.palette.mode]['fg']
    },
    {
      number: 2,
      title: 'Receive Your SIM/eSIM',
      description: 'Delivered to your hotel or airport pickup.',
      color: appColors[theme.palette.mode]['fg']
    },
    {
      number: 3,
      title: 'Activate & Enjoy',
      description: 'No complicated setup. Just insert and go!',
      color: appColors[theme.palette.mode]['fg']
    }
  ]
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          top: { xs: '170px', md: '120px' },
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Container maxWidth='lg' sx={{ px: { xs: 4, sm: 4, md: 8 } }}>
          <VideoComponent
            videoSrc='https://rentsimconnect.com/static/media/video.65ee4fd3417d0633da1b.mp4'
            autoPlay={true}
          />
        </Container>
      </Box>

      <Box
        id='features'
        sx={{
          backgroundColor: '#F9F8FE'
        }}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={3}
            sx={{ mt: 1, py: { xs: '2rem', md: '2rem' } }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={12}
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box sx={{ px: { xs: 3.5, sm: 2, md: 4, lg: 6 } }}>
                <Typography
                  variant='h4'
                  sx={{ mt: { xs: 2, sm: 2, md: 12, lg: 12, xl: 12 } }}
                >
                  Coming from US, Europe, Australia, or other parts of the world
                  to Ghana?
                  <br /> <b>SAVE 70%+ </b> on roaming charges with{' '}
                  <b>RentSimConnect!</b>
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <CheckedBtn
                    label='Navigate with ease – Use Google Maps, Uber, and more without interruption.'
                    sx={{ color: 'gray' }}
                  />
                  <CheckedBtn
                    sx={{ color: 'gray' }}
                    label='Stay productive – Conduct Zoom meetings & business calls without lag.'
                  />
                  <CheckedBtn
                    sx={{ color: 'gray' }}
                    label='Enjoy social media – Share your Ghana experience in real time.'
                  />
                  <CheckedBtn
                    sx={{ color: 'gray' }}
                    label='Stay in touch – Call, text & video chat with family and colleagues seamlessly.'
                  />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={12}
              sx={{ order: { xs: 2, md: 1 } }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  component='img'
                  src='/Images/rent_12.png'
                  alt='Platform Overview'
                  sx={{
                    width: { xs: '100%', md: '100%' },
                    height: 'auto',
                    alignItems: 'flex-end'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          minHeight: '80vh',
          background:
            'linear-gradient(to bottom right, rgb(182, 183, 202), #fff, #fff)'
        }}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={4}
            sx={{ px: { xs: 2, md: 8 }, pt: { xs: 6, md: 14 } }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={12}
              sx={{ py: { xs: 4, md: 8 } }}
            >
              <Box
                sx={{
                  px: { xs: 2, md: 5 },
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'start' },
                  alignItems: { xs: 'center', md: 'start' },
                  flexDirection: 'column',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.8rem', md: '2.5rem' }
                  }}
                >
                  Get Connected in 3 Simple Steps
                </Typography>
                <Box
                  component='img'
                  src='/Illus/vector.png'
                  alt='Platform Overview'
                  sx={{
                    py: 4,
                    width: '100%',
                    maxWidth: { xs: '280px', md: '100%' },
                    height: 'auto'
                  }}
                />

                <Button
                  size='text'
                  variant='contained'
                  sx={{
                    borderRadius: '50px',
                    py: '1rem',
                    px: '2rem',
                    backgroundColor:
                      appColors[theme.palette.mode]?.fg || '#000',
                    color: '#fff',
                    mt: 2,
                    '&:hover': {
                      backgroundColor: '#000'
                    }
                  }}
                  onClick={() => {
                    const section = document.getElementById('pricing');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth'})
                    }
                  }}
                >
                  Choose a plan
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
              <NumberGrid data={stats} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: '70vh',
          backgroundColor: '#F9F8FE'
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={12}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={12}
              sx={{ order: { xs: 2, md: 1 } }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'end',
                  pb: '2rem'
                }}
              >
                <Box
                  component='img'
                  src='/Images/rent_iii.png'
                  alt='Platform Overview'
                  sx={{
                    width: '100%',
                    height: 'auto',
                    alignItems: 'flex-end'
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={12}
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box sx={{ px:{xs: 4, sm: 3, md: 4, lg: 5}}}>
                <Typography variant='h3' sx={{ fontWeight: 600, mt: 10 }}>
                  Dont Land in Ghana <br /> Without Reliable <br /> Internet!
                </Typography>
                <Box sx={{ py: 2 }}>
                  <Typography variant='body2' color='gray'>
                    Click below to book your SIM/eSIM now and stay connected
                    from the moment you arrive!
                  </Typography>
                </Box>
                <Button
                  size='text'
                  sx={{
                    px: '2rem',
                    py: '1rem',
                    '&:hover': {
                      backgroundColor: '#000'
                    },
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    backgroundColor: appColors[theme.palette.mode]['fg']
                  }}
                  onClick={() => {
                    const section = document.getElementById('pricing');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth'})
                    }
                  }}
                >
                  Get your SIM Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        id='testimonials'
        sx={{
          minHeight: '60vh',
          py: { xs: 2, md: 3, lg: 3, xl: 4 },
          px: { xs: 3, sm: 3, md: 5, lg: 4, xl: 6 },
          background:
            'linear-gradient(to bottom left, rgb(228, 229, 236), #fff, #fff)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: { xs: 6, sm: 4, md: 6, lg: 6, xl: 7 },
            justifyContent: 'center'
          }}
        >
          <Typography variant='h3' sx={{ fontWeight: '700', color: '#000' }}>
            Testimonials
          </Typography>
        </Box>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box>
                <VideoComponent videoSrc='/Videos/video_1.mp4' />
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <VideoComponent videoSrc='/Videos/video_2.mp4' />
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <VideoComponent videoSrc='/Videos/video_3.mp4' />
              </Box>
            </Grid>
          </Grid>

          <Box id='faq'>
            <FAQSection />
          </Box>
        </Container>
      </Box>
      <Box id='pricing'>
        <PurchaseCards />
      </Box>
    </>
  )
}
