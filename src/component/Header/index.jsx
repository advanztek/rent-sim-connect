import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import { appColors } from '../../constants/color'
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid2';
import { CheckedBtn } from '..'

const navItems = ['Home', 'Features', 'Pricing', 'Coverage', 'FAQs']

export default function HomePage () {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #cdcee7, #fff)'
      }}
    >
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 'none',
          background: isScrolled ? 'white' : 'transparent',
          transition: 'background 0.3s ease'
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <img style={{ width: "60px", margin: "8px 1px", height: '60px'}} src="/Logo/Logo.png" alt="#" />

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item, index) => {
                const isActive =
                  item === 'Home'
                    ? window.location.pathname === '/' ||
                      window.location.pathname === '/home'
                    : window.location.pathname.includes(item.toLowerCase())

                return (
                  <Typography
                    key={index}
                    variant='body1'
                    sx={{
                      cursor: 'pointer',
                      color: isActive
                        ? appColors[theme.palette.mode]['fg']
                        : 'gray',
                      fontWeight: isActive ? 'bold' : 'normal',
                      transition: 'color 0.3s ease, font-weight 0.3s ease'
                    }}
                  >
                    {item}
                  </Typography>
                )
              })}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant='contained'
                sx={{
                  borderRadius: '11px',
                  display: { xs: 'none', md: 'block' },
                  backgroundColor: appColors[theme.palette.mode]['fg'],
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: isScrolled
                      ? '#000'
                      : appColors[theme.palette.mode]['fg']
                  }
                }}
              >
                Get SIM Now
              </Button>

              <IconButton
                onClick={() => setOpen(true)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  color: isScrolled ? '#000' : '#fff'
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
              <List sx={{ width: 250 }}>
                {navItems.map(text => (
                  <ListItem button key={text} onClick={() => setOpen(false)}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          minHeight: '110vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(to top left, #cdcee7,  #fff,rgb(210, 195, 211), #cdcee7)'
        }}
      >
        <Container maxWidth='lg' sx={{ backgroundColor: '#' }}>
          <Grid2 container spacing={2} sx={{ px: 1, py: {xs:4, md:15, lg:17, xl:20}, }}>
            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 12 }}>
              <Typography variant='h2' fontWeight='700'>
                Stay Connected Instantly in Ghana – No-Contracts. Fast &
                Affordable
              </Typography>
              <Typography variant='body1' sx={{ color: '#000', mt: 2 }}>
                Unlimited Internet & local Calls with RentSimConnect{' '}
              </Typography>
              <Box
                component='img'
                src='/Illus/vector.png'
                alt='Platform Overview'
                sx={{
                  width: { md: '350px', xs:'100%'},
                  height: 'auto',
                  pt: 1,
                  alignItems: 'center'
                }}
              />
              <Typography variant='body2' sx={{ mt: 2 }}>
                <b>
                  Arriving in Ghana? Skip the hassle of expensive roaming fees
                  <br /> and unreliable public Wifi!
                </b>{' '}
                <span>with</span> <b>RentSimConnect,</b> <span>you get:</span>
              </Typography>
              <Stack
                direction='row'
                spacing={3}
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  my: 3
                }}
              >
                <Stack
                  direction='row'
                  spacing={3}
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    my: 3
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CheckedBtn label='Instant Activation' />
                    <CheckedBtn label='From $2.50/day' />
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CheckedBtn label='26 African Countries' />
                    <CheckedBtn label='eSIM/Physical SIM' />
                  </Box>
                </Stack>
              </Stack>
              <Button
                size='text'
                sx={{
                  borderRadius: '50px',
                  px: "2rem",
                  py: "1rem",
                  display: { md: 'block' },
                  backgroundColor: appColors[theme.palette.mode]['fg'],
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: "#000"
                  },
                  mt: 3
                }}
              >
                Connect me now
              </Button>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 12 }}>
              <Box
                sx={{
                  width: '100%',
                  display: {xs: 'none', md:'flex', lg: 'flex', xl: 'flex'},
                  alignItems: {xs: 'center', md:'flex-end'},
                  justifyContent: {xs: 'center', md:'end'}
                }}
              >
                <Box
                  component='img'
                  src='/Images/hero_1.png'
                  alt='Platform Overview'
                  sx={{
                    width: {md:'400px',},
                    height: 'auto',
                    alignItems: 'flex-end'
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  )
}
