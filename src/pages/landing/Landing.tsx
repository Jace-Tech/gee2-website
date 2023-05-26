import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import Hero from './components/Hero'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LandingProps {} 

const Landing:React.FC<LandingProps> = () => {
  return (
    <Box>
      <Header />
      <Hero />
      
    </Box>
  )
}

export default Landing