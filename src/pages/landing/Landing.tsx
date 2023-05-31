import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import AppSection from './components/AppSection'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LandingProps {} 

const Landing:React.FC<LandingProps> = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Service />
      <AppSection />
    </Box>
  )
}

export default Landing