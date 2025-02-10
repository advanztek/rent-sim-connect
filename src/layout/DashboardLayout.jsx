import { useState } from 'react'
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { DashboardNav, DashboardSideNav } from '../component'


export default function DashboardLayout({ children }) {
  const theme = useTheme().palette.mode

  return (
    <Box >
      <DashboardNav />
      <DashboardSideNav
        
      />
      <Box component="main" >
        {children}
      </Box>
    </Box>
  )
}
