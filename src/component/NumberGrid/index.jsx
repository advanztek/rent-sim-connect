import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const NumberBox = ({ number, color = 'black' }) => {
  return (
    <Box
      sx={{
        width: { md: 80, xs: '20%' },
        height: { md: 80, xs: '40px' },
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        boxShadow: 2,
        border: '1px solid #ddd'
      }}
    >
      <Typography variant='h4' sx={{ color, fontWeight: 'bold' }}>
        {number}
      </Typography>
    </Box>
  )
}

const NumberGrid = ({ data }) => {
  return (
    <Box sx={{ padding: 3 }}>
  {data.map((item, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        marginBottom: 3,
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" }, 
        justifyContent: "center", 
        paddingLeft: { xs: 0, sm:0, md: index % 2 === 0 ? 20 : 0 }, 
      }}
    >
      <NumberBox number={item.number} color={item.color} />

      <Box>
        <Typography variant="h6" fontWeight="bold">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  ))}
</Box>

  )
}

export default NumberGrid
